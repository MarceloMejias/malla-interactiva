# Scripts - Malla Interactiva

Este directorio contiene scripts de utilidad para el desarrollo y mantenimiento del proyecto.

## 📄 Contenido

### `parser.py`
**Propósito**: Parser principal para convertir archivos HTML/JSP de mallas curriculares a formato JSON.

**Uso**:
```bash
python scripts/parser.py <archivo.jsp>
```

**Funcionalidades**:
- Extrae información de asignaturas desde HTML/JSP
- Identifica semestres, créditos, prerrequisitos y categorías
- Genera archivos JSON con estructura compatible con el proyecto
- Asigna colores aleatorios a cada categoría (sin verde)
- Normaliza nombres con Title Case (maneja conectores y números romanos)

**Salida**:
- `data_{CODIGO}.json`: Datos de la malla curricular
- `colors_{CODIGO}.json`: Paleta de colores por categoría

**Ejemplo**:
```bash
python scripts/parser.py malla_INF.jsp
# Genera: data_INF.json y colors_INF.json
```

---

### `json-to-ts.ts`
**Propósito**: Convierte archivos JSON de carreras al formato TypeScript esperado por la aplicación.

**Uso**:
```bash
npx tsx scripts/json-to-ts.ts
```

**Funcionalidades**:
- Lee todos los archivos JSON del directorio `data/`
- Convierte al formato `Carrera` de TypeScript
- Genera archivos `.ts` con exports correctos
- Organiza por campus (cc, vm, sj, vc, cp)
- Valida códigos de carrera y prerrequisitos

**Salida**:
```
src/data/cc/data_INF.ts
src/data/cc/colors_INF.ts
```

**Mapeo de Carreras**: El script incluye un diccionario completo de códigos a nombres de carreras.

---

### `json_to_ts.py`
**Propósito**: Versión Python del convertidor JSON a TypeScript (legacy).

**Uso**:
```bash
python scripts/json_to_ts.py
```

Similar a `json-to-ts.ts` pero implementado en Python. Se mantiene por compatibilidad.

---

### `unify-types.ts`
**Propósito**: Script de migración usado para unificar tipos duplicados en el proyecto.

**Contexto**: Utilizado durante la refactorización técnica para consolidar `Asignatura/Subject` y `Carrera/Career`.

**Uso histórico**:
```bash
npx tsx scripts/unify-types.ts
```

**Nota**: Este script fue ejecutado una vez durante la refactorización de tipos. Ya no es necesario ejecutarlo nuevamente a menos que se agreguen más archivos de carreras con el formato antiguo.

---

## 🔄 Flujo de Trabajo Típico

### Agregar una Nueva Carrera

1. **Obtener datos**: Conseguir el HTML/JSP de la malla curricular desde el sistema oficial de la USM

2. **Parsear datos**:
   ```bash
   python scripts/parser.py malla_CODIGO.jsp
   ```
   Esto genera `data_CODIGO.json` y `colors_CODIGO.json`

3. **Convertir a TypeScript**:
   ```bash
   npx tsx scripts/json-to-ts.ts
   ```
   Genera los archivos `.ts` en la carpeta correspondiente del campus

4. **Registrar carrera**: Agregar entrada en `src/data/carreras/index.ts`

5. **Verificar**: Ejecutar `npm run build` para validar

---

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

### Formato JSON Crudo (salida de parser.py)
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

**Índices**:
- [0]: Nombre
- [1]: Código
- [2]: Créditos USM (deprecated)
- [3]: Créditos SCT
- [4]: Categoría
- [5]: Array de prerrequisitos
- [6]: Semestre

### Formato TypeScript (salida de json-to-ts.ts)
```typescript
import { Carrera } from '@/types/curriculum';

export const INF: Carrera = {
  nombre: 'Ingeniería Civil Informática',
  codigo: 'INF',
  campus: 'cc',
  semesters: {
    1: [
      {
        nombre: 'Introducción a la Programación',
        codigo: 'INF-123',
        creditos: 6,
        categoria: 'Informática',
        prerequisitos: [],
        semestre: 1
      }
    ]
  }
};
```

---

## 🧪 Testing

Para probar un script individualmente:

```bash
# Test parser
python scripts/parser.py test_data/sample.jsp

# Test convertidor
npx tsx scripts/json-to-ts.ts

# Verificar salida
npm run build
```

---

## 📝 Notas de Mantenimiento

- **Colores**: El parser usa una paleta predefinida sin verde (reservado para materias aprobadas)
- **Conectores**: Se mantienen en minúscula: "de", "y", "en", "a", "la", "el", "del", "los", "las"
- **Números Romanos**: Se mantienen en mayúsculas (I, II, III, etc.)
- **Prerrequisitos**: El parser intenta detectarlos automáticamente, pero puede requerir validación manual
- **Categorías**: Asignadas según tabla HTML, pueden requerir ajustes manuales

---

## 🔮 Futuras Mejoras

- [ ] Script de validación de prerrequisitos
- [ ] Detección automática de campus
- [ ] Generación de tests unitarios para nuevas carreras
- [ ] CLI interactivo para agregar carreras
- [ ] Validación de créditos según normativa USM
- [ ] Sincronización con API oficial (si existiera)

---

## 🤝 Contribuir

Si mejoras algún script o agregas uno nuevo:

1. Documenta su propósito y uso en este README
2. Agrega ejemplos de uso
3. Incluye comentarios en el código
4. Actualiza el flujo de trabajo si es necesario
