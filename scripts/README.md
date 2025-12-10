# Scripts - Malla Interactiva

Este directorio contiene scripts de utilidad para el desarrollo y mantenimiento del proyecto.

## Contenido

### `parser.py`
**Propósito**: Parser principal para convertir archivos HTML/JSP de mallas curriculares a formato TypeScript compatible con el proyecto.

**Uso**:
```bash
python parser.py <archivo.jsp> <CODIGO> <campus> [nombre_carrera]
```

**Parámetros**:
- `<archivo.jsp>`: Ruta al archivo HTML/JSP de la malla curricular
- `<CODIGO>`: Código de la carrera (ej: INF, ICI, ELO)
- `<campus>`: Campus de la carrera: `cc` (Casa Central), `vm` (Viña del Mar), `sj` (San Joaquín), `vc` (Vitacura), `cp` (Concepción)
- `[nombre_carrera]`: (Opcional) Nombre completo de la carrera. Si no se proporciona, usa "Carrera {CODIGO}"

**Funcionalidades**:
- Extrae información de asignaturas desde HTML/JSP
- Identifica semestres, créditos SCT, prerrequisitos y categorías
- Genera archivo TypeScript con estructura `Carrera` compatible
- Asigna colores aleatorios a cada categoría (sin verde)
- Normaliza nombres con Title Case (maneja conectores y números romanos)
- Genera IDs para categorías automáticamente

**Salida**:
- `{codigo}.ts`: Archivo TypeScript listo para importar
- Estructura compatible con interfaces de `@/types/curriculum`

**Ejemplos**:
```bash
# Ejemplo 1: Ingeniería Civil Informática (Casa Central)
python parser.py INF.jsp INF cc 'Ing. Civil Informática'
# Genera: inf.ts

# Ejemplo 2: Ingeniería Comercial (Vitacura)
python parser.py ICOM.jsp ICOM vc 'Ingeniería Comercial'
# Genera: icom.ts

# Ejemplo 3: Sin nombre personalizado
python parser.py ELO.jsp ELO cc
# Genera: elo.ts con nombre "Carrera ELO"
```

**Proceso paso a paso**:

1. **Obtener archivo JSP/HTML**: Descarga la malla desde el SIGA
- Ve a 'Planes de Carreras'.
- Selecciona la carrera y campus.
- Haz clic en 'Imprimir'.
- Abre el inspector de elementos y selecciona la pestaña 'Fuentes'.
- Guarda el archivo `/sistinc/insc_generar.jsp` en la carpeta `/scripts`.

2. **Ejecutar parser**:
- Ejecuta el parser con los siguientes parámetros:
> archivo JSP, código de carrera, campus, nombre completo
- Por ejemplo:
   ```bash
   cd scripts
   python parser.py INGINF.jsp INGINF vm 'Ingeniería en Informática'
   ```

3. **Verificar salida**:
   ```bash
   # El script mostrará:
   # ✅ X asignaturas encontradas
   # ✅ Y categorías/departamentos detectados
   # 🎉 Archivo generado: inginf.ts
   ```

4. **Mover archivo generado**:
   ```bash
   mv inginf.ts ../src/data/carreras/vm/
   ```

5. **Registrar en índice** (`src/data/carreras/index.ts`):
   ```typescript
   // Importación
   import { inginf } from './vm/inginf';
   ...
   // Agregar al mapa de todas las carreras
   const allCareers: Record<string, Carrera> = {
     ...
     'INGINF',: inginf,
   };
   ```

7. **Validar**:
   ```bash
   cd ..
   npm run dev
   ```

**Estructura del archivo generado**:
```typescript
import { Carrera } from '@/types/curriculum';

export const inf: Carrera = {
  codigo: 'INF',
  nombre: 'Ingeniería en Informática',
  campus: 'cc',
  color: '#6366F1',
  
  categorias: [
    {
        "id": "FI",
        "nombre": "Fundamentos de Informática",
        "color": "#8B5CF6"
    },
    // ... más categorías
  ],

  asignaturas: [
    ...
    {
        "name": "Ciencias de la Ingeniería I: Estructura de Datos",
        "code": "EIN423-B",
        "sctCredits": 6,
        "type": "FI",
        "prerequisites": [
            "EIN413-B"
        ],
        "semester": "s2"
    },
    // ... más asignaturas
  ]
};
```

**Tips**:
- 💡 Revisa las categorías generadas y ajusta colores/nombres si es necesario
- 💡 Valida prerrequisitos manualmente (el parser es ~90% preciso)
- 💡 Usa códigos consistentes con carreras existentes
- 💡 El color principal de la carrera se asigna aleatoriamente, cámbialo si prefieres otro

---


---

## 🔄 Flujo de Trabajo Típico

### Agregar una Nueva Carrera

**Método directo (recomendado)**: Usar `parser.py` que genera TypeScript directamente.

1. **Obtener datos**: Conseguir el HTML/JSP de la malla curricular desde el SIGA USM.

2. **Parsear a TypeScript**:
   ```bash
   cd scripts
   python parser.py malla_CODIGO.jsp CODIGO campus 'Nombre Completo'
   ```
   
   Ejemplo real:
   ```bash
   python parser.py INF.jsp INF cc 'Ing. Civil Informática'
   ```

3. **Mover archivo generado**:
   ```bash
   mv inf.ts ../src/data/carreras/cc/
   ```

4. **Registrar carrera**: Agregar import en `src/data/carreras/index.ts`:
- Importar:
   ```typescript
    import { inginf } from './vm/inginf';
   ```
- Agregar al mapa de carreras:
    ```typescript
    'INGINF': inginf,
    ```

5. **Verificar**: Ejecutar build para validar
   ```bash
   cd ..
   npm run build
   ```



## 🛠️ Dependencias

### Python
- `beautifulsoup4`: Parsing HTML
- `json`: Serialización
- `os`, `random`: Utilidades

Instalar:
```bash
pip install beautifulsoup4
```

### TypeScript/Node.js
- `tsx`: Ejecutor TypeScript
- `fs`, `path`: Módulos nativos de Node.js

Instalar:
```bash
npm install -D tsx
```

---

## 📚 Formatos de Datos

### Formato TypeScript Actual (salida de parser.py)
```typescript
import { Carrera } from '@/types/curriculum';

export const inf: Carrera = {
  codigo: 'INF',
  nombre: 'Ing. Civil Informática',
  campus: 'cc',
  color: '#3B82F6',
  
  categorias: [
    {
      "id": "CB",
      "nombre": "Ciencias Básicas",
      "color": "#8B5CF6"
    },
    {
      "id": "ESP",
      "nombre": "Especialidad",
      "color": "#3B82F6"
    }
  ],

  asignaturas: [
    {
      "name": "Introducción a la Programación",
      "code": "INF-129",
      "sctCredits": 7,
      "type": "ESP",
      "prerequisites": [],
      "semester": "s1"
    }
  ]
};
```

**Campos de Asignatura**:
- `name`: Nombre de la asignatura
- `code`: Código único (ej: INF-129, MAT-021)
- `sctCredits`: Créditos SCT-Chile
- `type`: ID de la categoría a la que pertenece
- `prerequisites`: Array de códigos de asignaturas prerrequisito
- `semester`: Semestre sugerido (s1, s2, ..., s10, etc.)

**Campos de Categoría**:
- `id`: Identificador único (ej: CB, ESP, ELEC)
- `nombre`: Nombre descriptivo (ej: "Ciencias Básicas")
- `color`: Color hex para visualización

**Campos de Carrera**:
- `codigo`: Código de la carrera (ej: INF, ICI)
- `nombre`: Nombre completo o abreviado
- `campus`: `cc` | `vm` | `sj` | `vc` | `cp`
- `color`: Color principal de la carrera
- `categorias`: Array de categorías
- `asignaturas`: Array de asignaturas

---

### Formato JSON Legacy (mallas antiguas)
```json
{
  "s1": [
    [
      "Introducción a la Programación",
      "INF-123",
      0,
      6,
      "Informática",
      [],
      1
    ]
  ]
}
```

**Índices** (obsoleto):
- [0]: Nombre
- [1]: Código
- [2]: Créditos USM (deprecated)
- [3]: Créditos SCT
- [4]: Categoría
- [5]: Array de prerrequisitos
- [6]: Semestre

**Nota**: Este formato ya no se genera. El parser actual crea TypeScript directamente.


**Validaciones**:
- ✅ Todos los códigos de asignaturas son únicos
- ✅ Los prerrequisitos existen en la malla
- ✅ Las categorías tienen colores distintos
- ✅ Los créditos SCT son positivos
- ✅ Los semestres están en orden (s1, s2, ...)
- ✅ El archivo TypeScript compila sin errores

---

## Notas de Mantenimiento

- **Colores**: El parser usa una paleta predefinida sin verde (reservado para materias aprobadas)
- **Conectores**: Se mantienen en minúscula: "de", "y", "en", "a", "la", "el", "del", "los", "las"
- **Números Romanos**: Se mantienen en mayúsculas (I, II, III, etc.)
- **Prerrequisitos**: El parser intenta detectarlos automáticamente, pero puede requerir validación manual
- **Categorías**: Asignadas según tabla HTML, pueden requerir ajustes manuales

---

## Futuras Mejoras

- [ ] Generación de tests unitarios para nuevas carreras
- [ ] CLI interactivo para agregar carreras
- [ ] Sincronización con API oficial (si existiera)

---

## Contribuir

Si mejoras algún script o agregas uno nuevo:

1. Documenta su propósito y uso en este README
2. Agrega ejemplos de uso
3. Incluye comentarios en el código
4. Actualiza el flujo de trabajo si es necesario
