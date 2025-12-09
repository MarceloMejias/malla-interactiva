# 📁 Estructura del Proyecto - Malla Interactiva

> Documentación de la arquitectura y organización del código

## 🏗️ Arquitectura General

```
malla-interactiva/
├── public/              # Archivos estáticos y assets públicos
├── scripts/             # Scripts de utilidad para desarrollo
├── src/                 # Código fuente de la aplicación
│   ├── app/            # Next.js App Router (páginas y layout)
│   ├── components/     # Componentes React organizados por dominio
│   ├── data/           # Datos de carreras por campus
│   ├── hooks/          # Custom React Hooks
│   ├── types/          # Definiciones TypeScript
│   └── utils/          # Utilidades y helpers
├── out/                # Build estático generado (git-ignored)
└── node_modules/       # Dependencias (git-ignored)
```

---

## 📦 Directorio `src/`

### `src/app/` - Next.js App Router

```
app/
├── layout.tsx          # Layout raíz con metadata SEO
├── page.tsx            # Página principal (/)
├── globals.css         # Estilos globales Tailwind
└── favicon.svg         # Favicon del sitio
```

**`layout.tsx`**: 
- Configuración de fonts (Geist Sans & Mono)
- Meta tags SEO completos (Open Graph, Twitter Cards)
- PWA metadata y configuración iOS
- Providers de tema y service worker

**`page.tsx`**: 
- Punto de entrada de la aplicación
- Renderiza `CurriculumGrid` principal

---

### `src/components/` - Componentes React

Organización por dominio funcional para mejor mantenibilidad:

```
components/
├── career/             # Componentes relacionados a carreras
│   ├── CareerHeader.tsx      # Header con selector y acciones
│   └── CurriculumGrid.tsx    # Componente principal de la app
│
├── layout/             # Componentes de layout y estructura
│   ├── Footer.tsx            # Footer con créditos y links
│   └── StatsBar.tsx          # Barra de estadísticas de progreso
│
├── modals/             # Todos los modales de la aplicación
│   ├── CareerSelector.tsx           # Modal de selección de carrera
│   ├── CategoriesModal.tsx          # Modal de info de categorías
│   ├── ContributeModal.tsx          # Modal de contribución
│   ├── GraduationPlanModal.tsx      # Planificador de graduación
│   └── GuideModal.tsx               # Guía de uso
│
├── semester/           # Componentes de semestres y materias
│   ├── SemesterCard.tsx      # Card de semestre individual
│   ├── SemesterGrid.tsx      # Grid de todos los semestres
│   └── SubjectCard.tsx       # Card de materia con drag & drop
│
├── ui/                 # Componentes UI reutilizables
│   ├── ProgressToast.tsx     # Toast de progreso
│   └── Tooltip.tsx           # Tooltip genérico
│
└── utils/              # Componentes de utilidad y configuración
    ├── AppleSplashScreens.tsx    # Splash screens para iOS
    ├── ServiceWorkerRegister.tsx # Registro de SW para PWA
    └── ThemeColor.tsx            # Meta theme-color dinámico
```

#### Componentes Principales

**`CurriculumGrid.tsx`** (231 líneas):
- Componente principal que orquesta toda la aplicación
- Maneja estado global con custom hooks
- Lazy loading de modales pesados (GraduationPlan, Guide, Contribute)
- Coordinación de drag & drop y actualización de estado

**`SubjectCard.tsx`** (216 líneas):
- Tarjeta de materia con estados (pending/approved/current/failed)
- Drag & drop functionality
- Click en prerrequisitos para buscarlos
- Animaciones con Framer Motion
- Tooltip con información detallada

**`GraduationPlanModal.tsx`** (~938 líneas):
- Planificador semestral drag & drop
- Validación de prerrequisitos
- Límites de créditos por semestre
- Distribución inteligente de materias
- Exportación de plan

---

### `src/data/` - Datos de Carreras

Estructura organizada por campus:

```
data/
├── carreras/
│   └── index.ts           # Índice maestro de todas las carreras
│
├── cc/                    # Casa Central (Valparaíso)
│   ├── data_INF.ts
│   ├── colors_INF.ts
│   ├── data_ICI.ts
│   ├── colors_ICI.ts
│   └── ... (20+ carreras)
│
├── vm/                    # Viña del Mar
│   ├── data_ICA.ts
│   └── colors_ICA.ts
│
├── vc/                    # Vitacura
│   └── ...
│
├── sj/                    # San Joaquín
│   └── ...
│
└── cp/                    # Concepción
    └── ...
```

**Convención de nombres**:
- `data_CODIGO.ts`: Estructura de la malla curricular
- `colors_CODIGO.ts`: Paleta de colores por categoría

**Ejemplo de estructura**:
```typescript
export const INF: Carrera = {
  nombre: 'Ingeniería Civil Informática',
  codigo: 'INF',
  campus: 'cc',
  semesters: {
    1: [/* materias */],
    2: [/* materias */],
    // ...
  }
};
```

---

### `src/hooks/` - Custom React Hooks

```
hooks/
├── useCalculator.ts         # Lógica de cálculo de progreso
├── useCareerData.ts         # Carga de datos de carreras
├── useConfetti.ts           # Animación de confetti
├── useDarkMode.ts           # Detección y manejo de tema
├── useGraduationPlan.ts     # Lógica del planificador
└── useOGImage.ts            # Generación de OG images
```

#### Hooks Principales

**`useCalculator.ts`**:
- Estado de materias (pending/approved/current/failed)
- Cálculo de créditos por categoría
- Validación de prerrequisitos
- Persistencia en localStorage
- Manejo de drag & drop entre estados

**`useCareerData.ts`**:
- Carga dinámica de datos de carrera
- Manejo de colores por categoría
- Caché en memoria
- Gestión de errores de carga

**`useGraduationPlan.ts`**:
- Distribución de materias por semestre
- Validación de límites de créditos (30/35)
- Drag & drop entre semestres
- Cálculo de materias habilitadas
- Persistencia del plan

**`useDarkMode.ts`**:
- Detección de preferencia del sistema
- Toggle manual de tema
- Actualización de meta theme-color
- Sincronización con localStorage

---

### `src/types/` - Definiciones TypeScript

```
types/
└── curriculum.ts           # Todas las interfaces del proyecto
```

**Interfaces principales**:

```typescript
// Materia individual
interface Subject {
  nombre: string;
  codigo: string;
  creditos: number;
  categoria: string;
  prerequisitos: string[];
  semestre: number;
}

// Estado de una materia
type SubjectState = 'pending' | 'approved' | 'current' | 'failed';

// Carrera completa
interface Carrera {
  nombre: string;
  codigo: string;
  campus: 'cc' | 'vm' | 'sj' | 'vc' | 'cp';
  semesters: Record<number, Subject[]>;
}

// Colores por categoría
interface SubjectColors {
  [categoria: string]: [string, string]; // [color, descripción]
}

// Estado global del calculador
interface CalculatorState {
  [codigo: string]: SubjectState;
}
```

**Alias de compatibilidad**:
```typescript
type Asignatura = Subject;  // Deprecated, usar Subject
```

---

### `src/utils/` - Utilidades

```
utils/
└── logger.ts              # Logger condicional para desarrollo
```

**`logger.ts`**:
```typescript
const isDev = process.env.NODE_ENV === 'development';

export const logger = {
  log: (...args) => isDev && console.log(...args),
  error: (...args) => isDev && console.error(...args),
  warn: (...args) => isDev && console.warn(...args),
  info: (...args) => isDev && console.info(...args),
};
```

**Uso**: Reemplaza todos los `console.*` en código de producción para evitar logs innecesarios.

---

## 🎨 `public/` - Assets Públicos

```
public/
├── favicon.ico
├── favicon.svg
├── icon.png               # PWA icon 192x192
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── og-image.svg           # Open Graph image
├── thumbnail.png          # Preview image
├── site.webmanifest       # PWA manifest
├── robots.txt
├── sitemap.xml
├── sw.js                  # Service Worker
└── screenshots/           # App screenshots
    ├── iphone/
    └── mac/
```

---

## 🔧 `scripts/` - Scripts de Desarrollo

Ver [scripts/README.md](./scripts/README.md) para documentación detallada.

```
scripts/
├── parser.py              # HTML/JSP → JSON
├── json-to-ts.ts          # JSON → TypeScript
├── json_to_ts.py          # Versión Python del convertidor
└── unify-types.ts         # Script de migración (histórico)
```

---

## 📄 Archivos de Configuración

### `next.config.ts`
```typescript
export default {
  output: 'export',           // Static export
  basePath: isProd ? '/malla-interactiva' : '',
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      'framer-motion',
    ],
  },
};
```

### `tsconfig.json`
- Configuración TypeScript con path aliases (`@/*`)
- Strict mode habilitado
- Next.js plugin configurado

### `tailwind.config.ts`
- Tema personalizado con colores USM
- Dark mode: 'media' (automático según sistema)
- Fuentes Geist Sans & Mono
- Plugins: animaciones, scrollbar

### `package.json`
Scripts disponibles:
```json
{
  "dev": "next dev --turbopack",    // Desarrollo con Turbopack
  "build": "next build",             // Build de producción
  "start": "next start",             // Servidor de producción
  "lint": "next lint"                // Linting
}
```

---

## 🔄 Flujo de Datos

```
Usuario → CurriculumGrid
           ↓
     useCalculator (estado)
           ↓
   useCareerData (datos)
           ↓
     SemesterGrid → SemesterCard → SubjectCard
           ↓
   localStorage (persistencia)
```

### Estado Global (sin Redux)

El proyecto usa **React Hooks** para manejo de estado:

1. **Estado local**: `useState` en componentes
2. **Estado compartido**: Custom hooks con `useContext` implícito
3. **Persistencia**: `localStorage` con serialización JSON
4. **Caché**: Variables de módulo para datos estáticos

**Ventajas**:
- Simplicidad: No requiere Redux/Zustand
- Performance: Memoización con `useMemo`/`useCallback`
- Type-safe: TypeScript en toda la cadena
- Testeable: Hooks son funciones puras

---

## 🎯 Patrones de Diseño Aplicados

### 1. **Lazy Loading** (Code Splitting)
```typescript
const GraduationPlanModal = dynamic(() => import('./modals/GraduationPlanModal'), {
  ssr: false,
});
```
Reduce bundle inicial cargando modales bajo demanda.

### 2. **Custom Hooks** (Separation of Concerns)
Lógica de negocio separada de la presentación:
- `useCalculator`: Lógica de cálculo
- `SubjectCard`: Presentación

### 3. **Compound Components**
```typescript
<SemesterGrid>
  <SemesterCard>
    <SubjectCard />
  </SemesterCard>
</SemesterGrid>
```

### 4. **Render Props** (via hooks)
```typescript
const { state, actions } = useCalculator();
```

### 5. **Conditional Rendering** (Loading States)
```typescript
{!careerData ? <Loading /> : <CurriculumGrid />}
```

---

## 🚀 Optimizaciones Implementadas

### Bundle Size
- ✅ Lazy loading de modales (~1800 líneas on-demand)
- ✅ Tree-shaking de Font Awesome e íconos
- ✅ Optimización de imports con `experimental.optimizePackageImports`
- ✅ Eliminación de dependencias no usadas (Supabase, dotenv)

### Performance
- ✅ Memoización de cálculos pesados (`useMemo`)
- ✅ Callbacks estables (`useCallback`)
- ✅ Virtualización implícita (no necesaria por cantidad de datos)
- ✅ Caché de datos de carreras en memoria

### SEO
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Sitemap.xml y robots.txt
- ✅ Structured data para buscadores
- ✅ OG images dinámicas

### Developer Experience
- ✅ TypeScript strict mode
- ✅ Path aliases (`@/*`)
- ✅ Logger condicional (solo dev)
- ✅ Hot reload con Turbopack
- ✅ Documentación inline

---

## 📊 Métricas del Proyecto

### Tamaño del Código
- **Total**: ~15,000 líneas
- **Componentes**: ~3,500 líneas
- **Hooks**: ~1,200 líneas
- **Datos**: ~10,000 líneas (46 carreras)
- **Scripts**: ~500 líneas

### Bundle Size (estimado)
- **Initial**: ~150KB gzipped
- **Modals** (lazy): ~80KB gzipped
- **Total hydrated**: ~230KB gzipped

### Carreras Soportadas
- **Casa Central**: 32 carreras
- **Viña del Mar**: 3 carreras
- **Vitacura**: 4 carreras
- **San Joaquín**: 4 carreras
- **Concepción**: 3 carreras
- **Total**: 46 mallas curriculares

---

## 🔮 Próximas Mejoras en Estructura

### Corto Plazo
- [ ] Barrel exports (`index.ts`) en carpetas de componentes
- [ ] Tests unitarios (Jest + React Testing Library)
- [ ] Storybook para componentes UI
- [ ] ESLint rules personalizadas

### Mediano Plazo
- [ ] Migrar a Server Components donde sea posible
- [ ] API Routes para funciones backend
- [ ] Database real (Firebase/Supabase) para persistencia
- [ ] Sistema de autenticación

### Largo Plazo
- [ ] Multi-tenancy (otras universidades)
- [ ] API pública para desarrolladores
- [ ] Mobile apps (React Native)
- [ ] Analytics dashboard

---

## 🤝 Guías de Contribución

### Agregar Nuevo Componente

1. **Crear archivo** en la carpeta correspondiente:
   ```
   src/components/[dominio]/ComponentName.tsx
   ```

2. **Seguir estructura**:
   ```typescript
   'use client'; // si usa hooks
   
   import { ... } from '...';
   
   interface ComponentNameProps {
     // props con JSDoc
   }
   
   export default function ComponentName({ ... }: ComponentNameProps) {
     // lógica
     return (/* JSX */);
   }
   ```

3. **Importar donde se necesite**:
   ```typescript
   import ComponentName from '@/components/dominio/ComponentName';
   ```

### Agregar Nuevo Hook

1. **Crear archivo** en `src/hooks/`:
   ```typescript
   export function useFeatureName() {
     // lógica del hook
     return { state, actions };
   }
   ```

2. **Documentar** con JSDoc:
   ```typescript
   /**
    * Hook para manejar [funcionalidad]
    * @returns {Object} Estado y acciones
    */
   ```

### Agregar Nueva Carrera

Ver [scripts/README.md](./scripts/README.md) para el flujo completo.

---

## 📚 Referencias y Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

**Última actualización**: Diciembre 5, 2025  
**Mantenedor**: [@MarceloMejias](https://github.com/MarceloMejias)
