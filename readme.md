# Malla Interactiva UTFSM

> Una aplicación web interactiva para visualizar y calcular el progreso académico de las carreras de la Universidad Técnica Federico Santa María.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./licence)

---

## Características

### Funcionalidades Principales

- **Calculadora de Progreso**: Marca las asignaturas aprobadas y ve tu avance en tiempo real
- **Diseño Responsivo**: Optimizado para móvil, tablet y escritorio
- **Modo Oscuro/Claro**: Interfaz adaptable con cambio automático según preferencias del sistema
- **Plan de Graduación**: Planificador interactivo con drag & drop para organizar tus semestres
- **Colores por Categoría**: Cada tipo de asignatura tiene su color distintivo
- **Búsqueda de Prerrequisitos**: Click en prerrequisitos para encontrar la materia en la malla
- **Validación Académica**: Límites de créditos y validación de prerrequisitos en tiempo real
- **Estadísticas Detalladas**: Créditos por categoría, porcentaje de avance y más
- **Persistencia Local**: Tu progreso se guarda automáticamente en el navegador

### Características Avanzadas

#### Calculadora de Progreso
- Validación de prerrequisitos en tiempo real
- Cálculo automático de créditos por categoría
- Porcentaje de avance académico
- Detección de materias habilitadas
- Estados de materias: pendiente, aprobada, cursando, reprobada

#### Plan de Graduación
- Distribución inteligente de materias por semestre
- Validación de límites de créditos (30 normal, 35 máximo)
- Reorganización por drag & drop
- Indicadores visuales de sobrecarga
- Cálculo automático de materias disponibles según prerrequisitos

#### Experiencia de Usuario
- Animaciones suaves con Framer Motion
- Feedback visual inmediato
- Confetti al completar la carrera 🎉
- Touch gestures para móviles
- PWA ready con service worker
- Meta tags optimizados para Safari iOS

---

## Carreras Disponibles

### Casa Central (Valparaíso)
- Arquitectura
- Construcción Civil
- Ingeniería en Diseño de Productos
- Ingeniería Civil
- Ingeniería Civil Ambiental
- Ingeniería Civil de Minas
- Ingeniería Civil Electrónica (Mallas Actual y Antigua)
- Ingeniería Civil Eléctrica (Mallas Actual y Antigua)
- Ingeniería Comercial (Mallas Actual y Antigua)
- Ingeniería Civil Informática (Mallas Actual y Antigua)
- Ingeniería Civil Industrial (Mallas Actual y Antigua)
- Ingeniería Civil Matemática (Mallas Actual y Antigua)
- Ingeniería Civil Mecánica
- Ingeniería Civil Metalúrgica (Mallas Actual y Antigua)
- Ingeniería Civil Química (Mallas Actual y Antigua)
- Ingeniería Civil Telemática (Mallas Actual y Antigua)
- Licenciatura en Física
- Licenciatura en Astrofísica
- Licenciatura en Química

### Viña del Mar / Concepción
- Ingeniería en Informática
- Ingeniería en Biotecnología
- Ingeniería en Fabricación y Diseño Industrial
- Ingeniería en Mantenimiento Industrial
- Ingeniería en Prevención de Riesgos Laborales y Ambientales
- Técnico Universitario en Informática
- Técnico Universitario en Construcción

### San Joaquín - 4 carreras
- Ingeniería Comercial
- Ingeniería en Diseño
- Ingeniería Civil Industrial
- Técnico Universitario en Diseño

### Vitacura - 4 carreras
- Ingeniería Comercial
- Ingeniería en Diseño
- Ingeniería Civil Industrial
- Técnico Universitario en Diseño

### **Total**: 46 mallas curriculares

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
malla-interactiva/
├── public/              # Archivos estáticos (icons, manifest, service worker)
├── scripts/             # Scripts de utilidad (parser de mallas, conversión)
├── src/
│   ├── app/            # Next.js App Router (layout, página principal)
│   ├── components/     # Componentes React organizados por dominio
│   │   ├── career/           # Componentes de carrera (Header, Grid)
│   │   ├── layout/           # Layout components (Footer, StatsBar)
│   │   ├── modals/           # Todos los modales (Selector, Plan, Guide)
│   │   ├── semester/         # Semestre y materia cards
│   │   └── utils/            # Utilidades (PWA, theme color)
│   ├── data/           # Datos de carreras por campus (TypeScript)
│   │   ├── cc/               # Casa Central
│   │   ├── vm/               # Viña del Mar
│   │   ├── sj/               # San Joaquín
│   │   ├── vc/               # Vitacura
│   │   └── cp/               # Concepción
│   ├── hooks/          # Custom React Hooks
│   ├── types/          # Definiciones TypeScript
│   └── utils/          # Utilidades generales
└── out/                # Build estático (generado)
```

### Stack Tecnológico

- **Framework**: Next.js 16.0.7 con App Router
- **Lenguaje**: TypeScript 5.0+ (strict mode)
- **Estilos**: Tailwind CSS 4.0
- **Animaciones**: Framer Motion
- **Iconos**: Font Awesome
- **Fuentes**: Geist Sans & Geist Mono
- **Estado**: Custom React Hooks (sin Redux)
- **Persistencia**: localStorage
- **Build**: Turbopack (Next.js)

### Patrones de Diseño

- **Lazy Loading**: Code splitting de modales pesados
- **Custom Hooks**: Separación de lógica y presentación
- **Compound Components**: Composición de componentes
- **Render Props**: Compartir lógica entre componentes
- **Conditional Rendering**: Estados de carga optimizados

---

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

### Configuración del Proyecto

```bash
# Clonar el repositorio
git clone https://github.com/MarceloMejias/malla-interactiva.git
cd malla-interactiva

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo con Turbopack
npm run dev

# Construir para producción
npm run build

# Ejecutar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### Scripts Disponibles

```json
{
  "dev": "next dev --turbopack",    // Desarrollo con hot reload
  "build": "next build",             // Build estático para producción
  "start": "next start",             // Servidor de producción local
  "lint": "next lint"                // Linting con ESLint
}
```

---

## 📁 Estructura de Datos

### Formato de Carrera (TypeScript)

Las mallas están definidas en archivos TypeScript en `src/data/[campus]/`:

```typescript
// data_INF.ts
export const INF: Carrera = {
  nombre: 'Ingeniería Civil Informática',
  codigo: 'INF',
  campus: 'cc',
  semesters: {
    1: [
      {
        nombre: 'Cálculo I',
        codigo: 'MAT021',
        creditos: 6,
        categoria: 'Ciencias Básicas',
        prerequisitos: [],
        semestre: 1
      },
      // ... más materias
    ],
    2: [/* materias del semestre 2 */],
    // ... hasta semestre 10+
  }
};
```

### Formato de Colores (TypeScript)

```typescript
// colors_INF.ts
export const INF_COLORS: SubjectColors = {
  'Ciencias Básicas': ['#3B82F6', 'Matemáticas, Física, Química'],
  'Especialidad': ['#10B981', 'Cursos de la especialidad'],
  'Electivos': ['#F59E0B', 'Cursos electivos'],
  // ... más categorías
};
```

### Interfaces TypeScript

```typescript
interface Subject {
  nombre: string;
  codigo: string;
  creditos: number;
  categoria: string;
  prerequisitos: string[];
  semestre: number;
}

interface Carrera {
  nombre: string;
  codigo: string;
  campus: 'cc' | 'vm' | 'sj' | 'vc' | 'cp';
  semesters: Record<number, Subject[]>;
}

type SubjectState = 'pending' | 'approved' | 'current' | 'failed';
```

---

## 🛠️ Agregar Nueva Carrera

### Proceso Automatizado

1. **Obtener datos originales** (HTML/JSP de la malla oficial)

2. **Parsear HTML a TypeScript**:
   ```bash
   cd scripts
   python parser.py input.html output.ts
   ```

3. **Crear archivo de colores**:
   ```typescript
   // src/data/[campus]/colors_CODIGO.ts
   export const CODIGO_COLORS: SubjectColors = {
     'Categoría': ['#COLOR', 'Descripción'],
   };
   ```

4. **Registrar en índice**:
   ```typescript
   // src/data/carreras/index.ts
   export { CODIGO } from '../[campus]/data_CODIGO';
   export { CODIGO_COLORS } from '../[campus]/colors_CODIGO';
   ```

Ver [scripts/README.md](./scripts/README.md) para documentación detallada.

---

## 🎨 Personalización

### Modificar Colores de Categorías

Edita el archivo `colors_CODIGO.ts` de la carrera:

```typescript
export const INF_COLORS: SubjectColors = {
  'Ciencias Básicas': ['#3B82F6', 'Matemáticas y Física'],
  // Cambia el color hex y/o descripción
};
```

### Ajustar Límites de Créditos

En `useGraduationPlan.ts`:

```typescript
const MAX_CREDITS = 30;  // Límite normal
const MAX_CREDITS_EXTENDED = 35;  // Límite con sobrecarga
```

### Personalizar Tema

En `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Agregar colores personalizados
    }
  }
}
```

---

## 🧪 Testing

### Estructura de Tests (Propuesta)

```
tests/
├── unit/
│   ├── hooks/
│   │   ├── useCalculator.test.ts
│   │   └── useGraduationPlan.test.ts
│   └── utils/
│       └── logger.test.ts
├── integration/
│   └── components/
│       ├── SubjectCard.test.tsx
│       └── SemesterGrid.test.tsx
└── e2e/
    └── flows/
        ├── career-selection.test.ts
        └── graduation-plan.test.ts
```

### Ejecutar Tests (cuando estén implementados)

```bash
npm test              # Tests unitarios
npm run test:watch    # Watch mode
npm run test:e2e      # Tests end-to-end
npm run test:coverage # Coverage report
```

---

## 📊 Optimizaciones Implementadas

### Performance

- ✅ **Lazy Loading**: Modales cargados bajo demanda (~1800 líneas on-demand)
- ✅ **Code Splitting**: Bundle inicial de ~150KB gzipped
- ✅ **Memoización**: `useMemo` y `useCallback` en cálculos pesados
- ✅ **Tree Shaking**: Eliminación de código no usado
- ✅ **Font Optimization**: Geist fonts con display swap y preload
- ✅ **Image Optimization**: Next.js Image component
- ✅ **Static Export**: Build completamente estático para GitHub Pages

### SEO

- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Sitemap.xml y robots.txt
- ✅ Structured data para buscadores
- ✅ Semantic HTML
- ✅ Accesibilidad (ARIA labels)

### Developer Experience

- ✅ TypeScript strict mode
- ✅ Path aliases (`@/*`)
- ✅ Hot reload con Turbopack
- ✅ Logger condicional (solo dev)
- ✅ Documentación inline
- ✅ ESLint + Prettier

---

## 🤝 Contribuir

### Código de Conducta

Este proyecto sigue el [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

### Cómo Contribuir

1. **Fork** el proyecto
2. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -am 'feat: agregar nueva funcionalidad'
   ```
4. **Push** a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre un Pull Request**

### Convención de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva característica
fix: corrección de bug
docs: documentación
style: formato de código
refactor: refactorización
test: tests
chore: tareas de mantenimiento
```

### Áreas de Contribución

- 📝 **Reportar errores**: Prerrequisitos incorrectos, materias faltantes
- 🔄 **Actualizar mallas**: Cambios en planes de estudio
- 🎨 **Mejorar UX**: Sugerencias de diseño y usabilidad
- 🆕 **Agregar carreras**: Nuevas carreras o sedes
- 🧪 **Tests**: Añadir cobertura de tests
- 📚 **Documentación**: Mejorar README y docs

---

## 🎓 Agradecimientos

### Contribuidores con Datos de Mallas Originales

Este proyecto no habría sido posible sin la colaboración de estudiantes y ex-estudiantes de la UTFSM que contribuyeron con los datos originales de las mallas curriculares:

#### Creadores Originales
- **[Sebastián Aedo](https://github.com/etra0)** - Creador original de la malla interactiva. [Malla Original](https://github.com/etra0/ramos)
- **[César Paulangelo](https://github.com/booterman98)** - Mantenedor del fork de la malla interactiva original. [Fork de la Malla](https://booterman98.github.io/malla-interactiva/)

#### Contribuidores de Datos Curriculares

*Agradecemos a todos los estudiantes y ex-estudiantes que han contribuido con datos de mallas curriculares, validación de prerrequisitos, y correcciones a lo largo de los años. Sin su colaboración, mantener actualizadas las 46 carreras sería imposible.*

**¿Contribuiste con datos y no apareces aquí?** ¡Abre un issue para agregarte a la lista!

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [`licence`](./licence) para más detalles.

---

## 📚 Recursos Adicionales

- 📖 [Documentación de Estructura](./STRUCTURE.md) - Arquitectura detallada del proyecto
- 🔧 [Scripts de Desarrollo](./scripts/README.md) - Guía de scripts de utilidad
- 🎨 [Guía de Estilo](./CONTRIBUTING.md) - Convenciones de código (próximamente)
- 🐛 [Reportar Bug](https://github.com/MarceloMejias/malla-interactiva/issues/new?template=bug_report.md)
- ✨ [Solicitar Feature](https://github.com/MarceloMejias/malla-interactiva/issues/new?template=feature_request.md)

---

## 🔗 Enlaces

- 🌐 [Demo en vivo](https://marcelomejias.github.io/malla-interactiva/)
- 💻 [Repositorio GitHub](https://github.com/MarceloMejias/malla-interactiva)
- 📧 [Contacto](mailto:marcelo.mejias@sansano.usm.cl)

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.2.0  
**Mantenedor**: [@MarceloMejias](https://github.com/MarceloMejias)

### Contribuidores con Datos de Mallas Originales

Este proyecto no habría sido posible sin la colaboración de estudiantes y ex-estudiantes de la UTFSM que contribuyeron con los datos originales de las mallas curriculares:

#### Creadores Originales
- **[Sebastián Aedo](https://github.com/etra0)** - Creador original de la malla interactiva. [Malla Original](https://github.com/etra0/ramos)
- **[César Paulangelo](https://github.com/booterman98)** - Mantenedor del fork de la malla interactiva original. [Fork de la Malla](https://booterman98.github.io/malla-interactiva/)

#### Contribuidores de Datos Curriculares
*Agradecemos a todos los estudiantes y ex-estudiantes que han contribuido con datos de mallas curriculares, validación de prerrequisitos, y correcciones a lo largo de los años. Sin su colaboración, mantener actualizadas las 20+ carreras sería imposible.*

**¿Contribuiste con datos y no apareces aquí?** ¡Abre un issue para agregarte a la lista!

### Cómo Contribuir con Datos
- 📝 **Reportar errores**: Prerrequisitos incorrectos, materias faltantes, créditos erróneos
- 🔄 **Actualizar mallas**: Cambios en planes de estudio, nuevas materias, mallas renovadas
- 🎨 **Mejorar UX**: Sugerencias de colores, categorías, nombres de materias
- 🆕 **Agregar carreras**: Nuevas carreras o sedes que falten en el sistema


## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.