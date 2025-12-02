#!/usr/bin/env python3
"""
Script para convertir archivos JSON de carreras a archivos TypeScript
Uso: python scripts/json_to_ts.py
"""

import os
import json
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

# Mapeo de nombres de carreras
CAREER_NAMES = {
    'ICOM': 'Ingeniería Comercial',
    'INF': 'Ingeniería Civil Informática',
    'ELO': 'Ingeniería Civil Electrónica',
    'ELI': 'Ingeniería Civil Eléctrica',
    'TEL': 'Ingeniería Civil Telemática',
    'ICI': 'Ingeniería Civil Industrial',
    'ICIV': 'Ingeniería Civil',
    'MEC': 'Ingeniería Civil Mecánica',
    'ICQ': 'Ingeniería Civil Química',
    'MAT': 'Ingeniería Civil Matemática',
    'FIS': 'Ingeniería Civil Física',
    'ICA': 'Ingeniería en Informática',
    'ARQ': 'Arquitectura',
    'IDP': 'Ingeniería en Diseño de Productos',
    'ICBT': 'Ingeniería Civil en Biotecnología',
    'ICFIS': 'Ingeniería Física',
    'ICM': 'Ingeniería Civil de Minas',
    'MET': 'Ingeniería Civil Metalúrgica',
    'AMB': 'Ingeniería Ambiental',
    'LQUI': 'Licenciatura en Química',
    'AFI': 'Administración de Industrias Forestales',
    'CTCIV': 'Construcción Civil',
    'CONSTRU': 'Constructor Civil',
    'CIV': 'Ingeniería Civil',
}

CAMPUS_MAP = {
    'cc': 'cc',
    'vm': 'vm',
    'sj': 'sj',
    'vc': 'vc',
    'cp': 'cp',
}

CAMPUS_INDEX_FILES = {
    'cc': 'carreras_casacentral.json',
    'vm': 'carreras_vina.json',
    'sj': 'carreras_sanjoaquin.json',
    'vc': 'carreras_vitacura.json',
    'cp': 'carreras_concepcion.json',
}

def get_career_base_code(code: str) -> str:
    """Obtiene el código base sin el sufijo -0"""
    return code.replace('-0', '')

def get_career_name(code: str) -> str:
    """Obtiene el nombre de la carrera"""
    base_code = get_career_base_code(code)
    name = CAREER_NAMES.get(base_code, base_code)
    if code.endswith('-0'):
        name += ' (Malla Antigua)'
    return name

def convert_json_to_ts(campus: str, career_code: str, src_data_path: Path, output_path: Path, carreras_index: dict) -> Optional[Dict[str, Any]]:
    """Convierte un archivo JSON de carrera a TypeScript"""
    
    data_file = src_data_path / campus / f'data_{career_code}.json'
    colors_file = src_data_path / campus / f'colors_{career_code}.json'
    
    if not data_file.exists():
        print(f'⏭️  Saltando {career_code} - archivo no encontrado')
        return None
    
    # Leer datos
    with open(data_file, 'r', encoding='utf-8') as f:
        raw_data = json.load(f)
    
    raw_colors = {}
    if colors_file.exists():
        with open(colors_file, 'r', encoding='utf-8') as f:
            raw_colors = json.load(f)
    
    # Extraer color principal
    main_color = list(raw_colors.values())[0][0] if raw_colors else '#6B7280'
    
    # Buscar el nombre en el índice de carreras del campus
    career_name = None
    for carrera in carreras_index:
        if carrera.get('Link') == career_code:
            career_name = carrera.get('Nombre')
            if carrera.get('Color'):
                main_color = carrera['Color']
            break
    
    # Si no se encuentra en el índice, usar el diccionario de fallback
    if not career_name:
        career_name = get_career_name(career_code)
    
    # Construir categorías
    categorias = [
        {
            'id': cat_id,
            'nombre': cat_data[1],
            'color': cat_data[0],
        }
        for cat_id, cat_data in raw_colors.items()
    ]
    
    # Construir asignaturas
    asignaturas = []
    for semester, subjects in raw_data.items():
        for subject in subjects:
            asignaturas.append({
                'name': subject[0],
                'code': subject[1],
                'sctCredits': subject[3],
                'type': subject[4],
                'prerequisites': subject[5] if len(subject) > 5 else [],
                'semester': semester,
            })
    
    # Generar nombre de variable
    var_name = career_code.lower().replace('-', '_')
    
    # Generar código TypeScript
    ts_content = f"""import {{ Carrera }} from '../../types';

export const {var_name}: Carrera = {{
  codigo: '{career_code}',
  nombre: '{career_name}',
  campus: '{CAMPUS_MAP[campus]}',
  color: '{main_color}',
  
  categorias: {json.dumps(categorias, indent=4, ensure_ascii=False)},

  asignaturas: {json.dumps(asignaturas, indent=4, ensure_ascii=False)},
}};
"""
    
    # Escribir archivo en carpeta del campus
    campus_dir = output_path / campus
    campus_dir.mkdir(exist_ok=True)
    output_file = campus_dir / f'{var_name}.ts'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f'✅ Convertido: {career_code} ({campus})')
    
    return {
        'varName': var_name,
        'code': career_code,
        'name': career_name,
        'campus': CAMPUS_MAP[campus],
        'color': main_color,
    }

def main():
    print('🚀 Convirtiendo archivos JSON a TypeScript...\n')
    
    # Rutas
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    src_data_path = project_root / 'src' / 'data'
    output_path = project_root / 'src' / 'data' / 'carreras'
    
    # Crear directorios de campus
    campuses = ['cc', 'vm', 'sj', 'vc', 'cp']
    for campus in campuses:
        (output_path / campus).mkdir(parents=True, exist_ok=True)
    
    all_careers = {campus: [] for campus in campuses}
    imports = []
    carreras_map = []
    
    for campus in campuses:
        campus_path = src_data_path / campus
        if not campus_path.exists():
            continue
        
        # Leer índice de carreras del campus
        carreras_index_file = campus_path / CAMPUS_INDEX_FILES.get(campus, f'carreras_{campus}.json')
        carreras_index = []
        
        if carreras_index_file.exists():
            with open(carreras_index_file, 'r', encoding='utf-8') as f:
                carreras_index = json.load(f)
            print(f'📋 Cargado índice de {campus}: {len(carreras_index)} carreras')
        else:
            print(f'⚠️  No se encontró {carreras_index_file.name}, usando nombres por defecto')
        
        # Buscar archivos data_*.json
        data_files = list(campus_path.glob('data_*.json'))
        
        for data_file in data_files:
            career_code = data_file.stem.replace('data_', '')
            result = convert_json_to_ts(campus, career_code, src_data_path, output_path, carreras_index)
            
            if result:
                all_careers[campus].append({
                    'Nombre': result['name'],
                    'Link': result['code'],
                    'Color': result['color'],
                })
    
    # No generar index.ts - la API lee directamente los archivos
    
    # Resumen
    total = sum(len(careers) for careers in all_careers.values())
    print('\n✨ Conversión completa!')
    print(f'📊 Total carreras convertidas: {total}')
    for campus in campuses:
        count = len(all_careers[campus])
        campus_name = {
            'cc': 'Casa Central',
            'vm': 'Viña del Mar',
            'sj': 'San Joaquín',
            'vc': 'Vitacura',
            'cp': 'Concepción',
        }[campus]
        print(f'   - {campus_name}: {count}')
    print(f'\n📁 Archivos organizados en: src/data/carreras/{{campus}}/{{codigo}}.ts')

if __name__ == '__main__':
    main()
