import os
import json

# Ruta a la carpeta de carreras y al índice
CARRERAS_DIR = os.path.join(os.path.dirname(__file__), '../src/data/vm')
INDEX_FILE = os.path.join(CARRERAS_DIR, 'carreras_vina.json')

# Cargar índice de carreras
with open(INDEX_FILE, encoding='utf-8') as f:
    carreras_index = {c['Link']: c for c in json.load(f)}

# Procesar cada archivo de carrera
for fname in os.listdir(CARRERAS_DIR):
    if not fname.startswith('data_') or not fname.endswith('.json'):
        continue
    code = fname.replace('data_', '').replace('.json', '')
    if code not in carreras_index:
        print(f"[WARN] No metadata for {code}")
        continue
    meta = carreras_index[code]
    path = os.path.join(CARRERAS_DIR, fname)
    with open(path, encoding='utf-8') as f:
        plan = json.load(f)
    # Migrar estructura
    new_data = {
        "nombre": meta["Nombre"],
        "codigo": code,
        "color": meta["Color"],
        "plan": plan
    }
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2)
    print(f"Migrated {fname}")

print("Listo. Puedes borrar carreras.json si todo está bien.")
