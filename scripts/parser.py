from bs4 import BeautifulSoup
import json
import os
import random
import re

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

    asignaturas = []
    departamentos = set()
    semester = None
    codigos_vistos = {}  # Diccionario para detectar duplicados {codigo: semestre}
    asignaturas_temp = []  # Lista temporal para guardar con depto original

    # Paso 1: recolectar todas las siglas de la malla
    all_siglas = set()
    
    for row in soup.find_all("tr"):
        cols = [c.get_text(strip=True) for c in row.find_all("td")]
        if len(cols) >= 2:  # Debe tener al menos sigla y nombre
            sigla = cols[0].strip()
            nombre = cols[1].strip() if len(cols) > 1 else ""
            
            # Filtros para identificar filas de asignaturas reales
            if not sigla or len(sigla) < 3:
                continue
            # Excluir headers y textos descriptivos
            if sigla.upper() in ['SIGLA', 'TOTAL']:
                continue
            # Excluir filas de semestre (contienen "Semestre" o "°")
            if "semestre" in sigla.lower() or "°" in sigla:
                continue
            # Excluir si es solo números (números de semestre)
            if sigla.isdigit():
                continue
            # Debe tener al menos una letra Y un número (patrón de código de asignatura)
            if not (any(c.isalpha() for c in sigla) and any(c.isdigit() for c in sigla)):
                continue
            # Debe tener un nombre asociado
            if not nombre or len(nombre) < 3:
                continue
            
            all_siglas.add(sigla)

    # Paso 2: procesar asignaturas
    for row in soup.find_all("tr"):
        cols = [c.get_text(strip=True) for c in row.find_all("td")]
        if not cols or len(cols) < 2:
            continue  # Ignorar filas vacías o con menos de 2 columnas

        if "Semestre" in cols[0]:
            num = cols[0].split("°")[0]
            semester = f"s{num}"
            continue

        if cols[0].lower() == "sigla" or cols[1].lower() == "asignatura":
            continue

        if semester and len(cols) >= 7:
            sigla = cols[0].strip()
            nombre_raw = cols[1]
            
            # Validaciones adicionales para asegurar que es una fila de asignatura válida
            if not sigla or len(sigla) < 3:
                continue
            if sigla.lower() in ['sigla', 'total', 'semestre']:
                continue
            if not nombre_raw or len(nombre_raw) < 3:
                continue
            
            # CRÍTICO: Verificar que la sigla esté en la lista de siglas recolectadas
            # Esto evita procesar filas de equivalencias u otras no relevantes
            if sigla not in all_siglas:
                continue
            
            nombre = clean_name(nombre_raw)

            # Detectar duplicados
            if sigla in codigos_vistos:
                print(f"⚠️  ADVERTENCIA: Código duplicado {sigla} encontrado en {semester} (ya existe en {codigos_vistos[sigla]})")
                continue  # Saltar duplicados
            
            codigos_vistos[sigla] = semester

            # Validar que los créditos sean números válidos
            creditos_usm = int(cols[2]) if cols[2].isdigit() else 0
            sct = int(cols[7]) if len(cols) > 7 and cols[7].isdigit() else 0
            
            # Si no tiene créditos SCT, probablemente no es una asignatura válida
            if sct == 0:
                print(f"⚠️  ADVERTENCIA: {sigla} no tiene créditos SCT, omitiendo")
                continue
            
            depto = cols[8] if len(cols) > 8 else ""
            if depto:
                departamentos.add(depto)

            # Determinar columna de prerrequisitos
            # La estructura común es: [..., Requisitos, Equivalencias] o [..., Requisitos]
            # Requisitos está en la columna 9 (índice 9) o penúltima si hay menos columnas
            tds = row.find_all("td")
            td_requisitos = None
            
            # Intentar obtener la columna 9 (índice 9) que suele ser prerrequisitos
            if len(tds) > 9:
                td_requisitos = tds[9]
            elif len(tds) >= 2:
                # Si no hay suficientes columnas, usar penúltima (antes de equivalencias)
                td_requisitos = tds[-2]
            
            requisitos_list = []
            if td_requisitos:
                # Obtener el contenido completo de la celda de prerrequisitos
                requisitos_html = td_requisitos.decode_contents()
                soup_part = BeautifulSoup(requisitos_html, "html.parser")
                
                # Extraer TODOS los códigos - combinar múltiples métodos
                
                # Método 1: Buscar en tags <acronym>
                for acr in soup_part.find_all("acronym"):
                    code_text = acr.get_text(strip=True)
                    # Extraer solo el código (primera palabra)
                    code = code_text.split()[0] if code_text else ""
                    code = code.replace("-", "").strip()
                    if code and code in all_siglas:
                        requisitos_list.append(code)
                
                # Método 2: Buscar en texto completo (siempre, no solo si falla método 1)
                texto_completo = soup_part.get_text(" ", strip=True)
                # Reemplazar separadores por espacios
                texto_limpio = re.sub(r'[+óÓ,().\-]', ' ', texto_completo)
                palabras = texto_limpio.split()
                
                for palabra in palabras:
                    palabra = palabra.strip()
                    if not palabra:
                        continue
                    
                    # Verificar coincidencia exacta primero
                    if palabra in all_siglas:
                        requisitos_list.append(palabra)
                    # Si contiene letras y números, buscar patrones de código de asignatura
                    elif len(palabra) >= 3 and any(c.isalpha() for c in palabra) and any(c.isdigit() for c in palabra):
                        # Intentar matchear con siglas conocidas
                        for sigla_conocida in all_siglas:
                            if palabra.upper() == sigla_conocida.upper():
                                requisitos_list.append(sigla_conocida)
                                break
                
                # Método 3: Buscar códigos con patrón específico (ej: MAT243, INF129)
                # Patrón: 2-4 letras seguidas de 2-4 números
                codigo_pattern = re.compile(r'[A-Z]{2,4}[\-\s]?\d{2,4}', re.IGNORECASE)
                codigos_encontrados = codigo_pattern.findall(requisitos_html)
                for codigo in codigos_encontrados:
                    codigo = re.sub(r'[\-\s]', '', codigo).upper()
                    if codigo in all_siglas:
                        requisitos_list.append(codigo)
            
            # Eliminar duplicados y auto-referencias manteniendo el orden
            requisitos = []
            seen = set()
            for req in requisitos_list:
                if req not in seen and req != sigla:  # No puede ser requisito de sí mismo
                    seen.add(req)
                    requisitos.append(req)
            
            # Guardar temporalmente con departamento original
            asignaturas_temp.append({
                "name": nombre,
                "code": sigla,
                "sctCredits": sct,
                "depto_original": depto,  # Guardar nombre original del departamento
                "prerequisites": requisitos,
                "semester": semester
            })

    return asignaturas_temp, list(departamentos)

def assign_colors(departamentos):
    colores_disponibles = COLORS.copy()
    random.shuffle(colores_disponibles)
    colors_dict = {}
    categorias_map = {}  # Mapeo de nombre original a ID
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
        
        # Generar ID del departamento basado en el nombre original (mayúsculas)
        # Remover espacios y caracteres especiales
        depto_id = re.sub(r'[^A-Z0-9]', '', depto.upper())
        
        # Si el ID queda muy largo, usar solo las primeras letras de cada palabra
        if len(depto_id) > 10:
            palabras = depto.upper().split()
            if len(palabras) > 1:
                # Tomar primeras 2-3 letras de cada palabra importante
                depto_id = ''.join([p[:2] if len(p) > 2 else p for p in palabras if len(p) > 2])[:8]
            else:
                depto_id = depto_id[:8]
        
        # Asegurar que el ID no esté vacío
        if not depto_id:
            depto_id = depto.upper()[:4]
        
        colors_dict[depto] = {
            "id": depto_id,
            "nombre": depto_name,
            "color": color
        }
        
        # Guardar mapeo para usar en asignaturas
        categorias_map[depto] = depto_id
    
    return colors_dict, categorias_map


def generate_typescript_file(codigo: str, nombre: str, campus: str, asignaturas: list, categorias: dict, main_color: str):
    """Genera un archivo TypeScript con la estructura de Carrera"""
    
    # Convertir diccionario de categorías a lista
    categorias_list = list(categorias.values())
    
    ts_content = f"""import {{ Carrera }} from '@/types/curriculum';

export const {codigo.lower()}: Carrera = {{
  codigo: '{codigo}',
  nombre: '{nombre}',
  campus: '{campus}',
  color: '{main_color}',
  
  categorias: {json.dumps(categorias_list, ensure_ascii=False, indent=4)},

  asignaturas: {json.dumps(asignaturas, ensure_ascii=False, indent=4)}
}};
"""
    return ts_content


def sanitize_filename(name: str) -> str:
    """Convierte nombre de archivo a formato válido (lowercase, guiones)"""
    # Remover caracteres especiales y convertir a lowercase
    name = re.sub(r'[^\w\s-]', '', name.lower())
    # Reemplazar espacios con guiones bajos
    name = re.sub(r'[-\s]+', '_', name)
    return name

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 4:
        print("Uso: python parser.py <archivo.jsp> <CODIGO> <campus> [nombre_carrera]")
        print("Ejemplo: python parser.py INF.jsp INF cc 'Ing. Civil Informática'")
        print("\nCampus válidos: cc, vm, sj, vc, cp")
        sys.exit(1)
    
    jsp_file = sys.argv[1]
    codigo = sys.argv[2].upper()
    campus = sys.argv[3].lower()
    nombre = sys.argv[4] if len(sys.argv) > 4 else f"Carrera {codigo}"
    
    if campus not in ['cc', 'vm', 'sj', 'vc', 'cp']:
        print(f"❌ Campus inválido: {campus}")
        print("Usa uno de: cc, vm, sj, vc, cp")
        sys.exit(1)
    
    if not os.path.exists(jsp_file):
        print(f"❌ Archivo no encontrado: {jsp_file}")
        sys.exit(1)
    
    print(f"📄 Parseando {jsp_file}...")
    
    # Parsear asignaturas y departamentos
    asignaturas_temp, departamentos = parse_jsp(jsp_file)
    
    print(f"✅ {len(asignaturas_temp)} asignaturas encontradas")
    print(f"✅ {len(departamentos)} categorías/departamentos detectados")
    
    # Asignar colores a departamentos/categorías y obtener mapeo
    categorias, categorias_map = assign_colors(departamentos)
    
    # Paso 3: Convertir asignaturas temporales a formato final usando el mapeo de IDs
    asignaturas_finales = []
    for asig_temp in asignaturas_temp:
        depto_original = asig_temp["depto_original"]
        # Usar el ID de categoría en lugar del nombre del departamento
        type_id = categorias_map.get(depto_original, depto_original)
        
        asignatura_final = {
            "name": asig_temp["name"],
            "code": asig_temp["code"],
            "sctCredits": asig_temp["sctCredits"],
            "type": type_id,  # Ahora usa el ID de la categoría
            "prerequisites": asig_temp["prerequisites"],
            "semester": asig_temp["semester"]
        }
        asignaturas_finales.append(asignatura_final)
    
    # Generar color principal aleatorio para la carrera
    main_color = random.choice(COLORS)
    
    # Generar archivo TypeScript
    ts_content = generate_typescript_file(codigo, nombre, campus, asignaturas_finales, categorias, main_color)
    
    # Crear nombre de archivo sanitizado
    filename = sanitize_filename(codigo)
    output_file = f"{filename}.ts"
    
    # Guardar archivo
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(ts_content)
    
    print(f"\n🎉 Archivo generado: {output_file}")
    print(f"\n📋 Siguiente paso:")
    print(f"1. Mueve {output_file} a src/data/carreras/{campus}/")
    print(f"2. Importa en src/data/carreras/index.ts:")
    print(f"   export {{ {codigo.lower()} }} from './{campus}/{filename}';")
    print(f"3. Registra en el selector de carreras")
    print(f"\n💡 Revisa las categorías y ajusta los colores si es necesario")
            