from bs4 import BeautifulSoup
import json
import os
import random

# Conectores que deben ir en minúscula
connectors = {"de", "y", "en", "a", "la", "el", "del", "los", "las"}

# Paleta extendida de colores (sin verde)
COLORS = [
    "#FF5733", "#335BFF", "#8E44AD", "#3498DB", "#C70039",
    "#FFC300", "#6A5ACD", "#00CED1", "#FF1493", "#FF69B4",
    "#D69F7E", "#FF8811", "#e4A1F9", "#FF5964", "#a53f2b"
]

def format_title_case(text: str) -> str:
    roman_numerals = {"I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
                      "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"}
    words = text.split()
    formatted = []
    for w in words:
        lw = w.lower()
        uw = w.upper()
        if lw in connectors:
            formatted.append(lw)
        elif uw in roman_numerals:
            formatted.append(uw)
        else:
            formatted.append(w.capitalize())
    return " ".join(formatted)

def clean_name(nombre_raw: str) -> str:
    """Elimina 'Nuevo programa' y limpia espacios innecesarios"""
    cleaned = nombre_raw.replace("Nuevo programa", "").strip()
    return format_title_case(cleaned) if cleaned else "Asignatura sin nombre"

def parse_jsp(file_path: str):
    with open(file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    data = {}
    departamentos = set()
    semester = None

    # Paso 1: recolectar todas las siglas de la malla
    all_siglas = set()
    for row in soup.find_all("tr"):
        cols = [c.get_text(strip=True) for c in row.find_all("td")]
        if len(cols) >= 1:
            sigla = cols[0].strip()
            if sigla and sigla.upper() != "SIGLA":
                all_siglas.add(sigla)

    # Paso 2: procesar asignaturas
    for row in soup.find_all("tr"):
        cols = [c.get_text(strip=True) for c in row.find_all("td")]
        if not cols or len(cols) < 2:
            continue  # Ignorar filas vacías o con menos de 2 columnas

        if "Semestre" in cols[0]:
            num = cols[0].split("°")[0]
            semester = f"s{num}"
            if semester not in data:
                data[semester] = []
            continue

        if cols[0].lower() == "sigla" or cols[1].lower() == "asignatura":
            continue

        if semester and len(cols) >= 7:
            sigla = cols[0]
            nombre_raw = cols[1]
            nombre = clean_name(nombre_raw)

            creditos_usm = int(cols[2]) if cols[2].isdigit() else 0
            sct = int(cols[7]) if cols[7].isdigit() else 0
            depto = cols[8] if len(cols) > 8 else ""
            if depto:
                departamentos.add(depto)

            td_requisitos = row.find_all("td")[-2] if len(row.find_all("td")) >= 2 else None
            requisitos_set = set()
            if td_requisitos:
                alternativas = td_requisitos.decode_contents().split('ó')
                for alt in alternativas:
                    subreqs = [sp.strip() for sp in alt.split('+') if sp.strip()]
                    for sub in subreqs:
                        soup_part = BeautifulSoup(sub, "html.parser")
                        acr_codes = [acr.get_text(strip=True).split()[0].replace("-", "").strip()
                                     for acr in soup_part.find_all("acronym")]
                        if acr_codes:
                            requisitos_set.update([c for c in acr_codes if c in all_siglas])
                        else:
                            text_parts = soup_part.get_text(" ", strip=True).replace(",", " ").split()
                            for part in text_parts:
                                if (part.isupper() or any(ch.isdigit() for ch in part)) and part in all_siglas:
                                    requisitos_set.add(part)

            requisitos = list(requisitos_set)
            data[semester].append([nombre, sigla, creditos_usm, sct, depto, requisitos, ""])

    return data, list(departamentos)

def assign_colors(departamentos):
    colores_disponibles = COLORS.copy()
    random.shuffle(colores_disponibles)
    colors_dict = {}
    used_colors = set()
    for depto in departamentos:
        depto_name = format_title_case(depto)
        color = None
        while colores_disponibles:
            candidate = colores_disponibles.pop()
            if candidate not in used_colors:
                color = candidate
                used_colors.add(color)
                break
        if not color:
            while True:
                candidate = "#{:06X}".format(random.randint(0, 0xFFFFFF))
                if not (0x00FF00 <= int(candidate[1:], 16) <= 0x00FF00) and candidate not in used_colors:
                    color = candidate
                    used_colors.add(color)
                    break
        colors_dict[depto] = [color, depto_name]
    return colors_dict

if __name__ == "__main__":
    folder_path = "."  # Carpeta con los JSP

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".jsp"):
            file_path = os.path.join(folder_path, filename)
            base_name = os.path.splitext(filename)[0]

            # Parsear asignaturas y departamentos
            data, departamentos = parse_jsp(file_path)

            # Guardar JSON de datos
            data_file = f"data_{base_name}.json"
            with open(data_file, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            # Asignar colores a departamentos
            colors_dict = assign_colors(departamentos)
            colors_file = f"colors_{base_name}.json"
            with open(colors_file, "w", encoding="utf-8") as f:
                json.dump(colors_dict, f, ensure_ascii=False, indent=2)

            print(f"✅ Generados {data_file} y {colors_file}")
            