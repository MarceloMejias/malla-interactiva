# Malla Interactiva UTFSM

Una aplicación web interactiva para visualizar y calcular el progreso académico de las carreras de la Universidad Técnica Federico Santa María.

## Características

- **Calculadora de Progreso**: Marca las asignaturas aprobadas y ve tu avance en tiempo real
- **Diseño Responsivo**: Optimizado para móvil, tablet y escritorio
- **Modo Oscuro/Claro Automático**: Interfaz adaptable con cambio automático del tema
- **Plan de Graduación**: Visualiza tu plan de estudios semestre por semestre
- **Drag & Drop**: Reorganiza materias entre semestres en el planificador
- **Estadísticas Detalladas**: Créditos por categoría, porcentaje de avance y más
- **Colores por Categoría**: Cada tipo de asignatura tiene su color distintivo
- **Búsqueda de Prerrequisitos**: Click en prerrequisitos para encontrar la materia
- **Validación Académica**: Límites de créditos y validación de prerrequisitos

## Carreras Disponibles

### Casa Central (Valparaíso)
- Arquitectura
- Construcción Civil
- Ingeniería en Diseño de Productos
- Ingeniería Civil
- Ingeniería Civil Ambiental
- Ingeniería Civil de Minas
- Ingeniería Civil Electrónica
- Ingeniería Civil Eléctrica
- Ingeniería Comercial
- Ingeniería Comercial (Mallas Actual y Antigua)
- Licenciatura en Física
- Licenciatura en Astrofísica
- Licenciatura en Química
- Ingeniería Civil Informática (Mallas Actual y Antigua)
- Ingeniería Civil Industrial
- Ingeniería Civil Matemática
- Ingeniería Civil Mecánica
- Ingeniería Civil Metalúrgica
- Ingeniería Civil Química
- Ingeniería Civil Telemática


### Viña del Mar - Concepción - Vitacura
- Ingeniería en Aviación Comercial
- Ingeniería en Biotecnología
- Ingeniería en Informática

## Tecnologías

- **Frontend**: Next.js 15, React 18, TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: FontAwesome
- **Estado**: React Hooks (useState, useEffect, useRef)
- **Persistencia**: LocalStorage para configuraciones

## Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/MarceloMejias/malla-interactiva.git
cd malla-interactiva

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── CurriculumGrid.tsx # Componente principal
│   ├── SemesterGrid.tsx   # Grid de semestres
│   ├── SubjectCard.tsx    # Tarjetas de materias
│   ├── StatsBar.tsx       # Barra de estadísticas
│   ├── GraduationPlanModal.tsx # Modal del plan de graduación
│   └── ...
├── hooks/                 # Custom Hooks
│   ├── useCalculator.ts   # Lógica de cálculos
│   ├── useCareerData.ts   # Manejo de datos de carreras
│   └── ...
├── types/                 # Definiciones TypeScript
│   └── curriculum.ts      # Tipos para materias y datos
├── utils/                 # Utilidades
│   └── calculator.ts      # Funciones de cálculo
└── data/                  # Datos de carreras
    ├── carreras.json      # Lista de carreras
    ├── data_*.json        # Datos por carrera
    └── colors_*.json      # Colores por carrera
```

## Personalización

### Agregar Nueva Carrera

1. **Crear archivo de datos**: `data/data_CODIGO.json`
2. **Crear archivo de colores**: `data/colors_CODIGO.json`
3. **Actualizar lista**: Agregar a `data/carreras.json`

### Formato de Datos

```json
{
  "s1": [
    ["Nombre Materia", "CODIGO", "sem", "creditos", "categoria", ["prerequisitos"], "estado"]
  ]
}
```

### Formato de Colores

```json
{
  "CATEGORIA": ["#COLOR_HEX", "Descripción"]
}
```

## Características Móviles

- **Touch Gestures**: Soporte completo para drag & drop táctil
- **Responsive Grid**: Layout adaptable a diferentes tamaños de pantalla
- **Safari Integration**: Meta tags optimizados para iOS
- **PWA Ready**: Configuración para Progressive Web App

## Funcionalidades Avanzadas

### Calculadora de Progreso
- Validación de prerrequisitos en tiempo real
- Cálculo automático de créditos por categoría
- Porcentaje de avance académico
- Detección de materias habilitadas

### Plan de Graduación
- Distribución inteligente de materias por semestre
- Validación de límites de créditos (30 normal, 35 máximo)
- Reorganización por drag & drop
- Indicadores visuales de sobrecarga

### Experiencia de Usuario
- Animaciones suaves y transiciones
- Feedback visual inmediato
- Confetti al completar la carrera
- Modo oscuro automático

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Agradecimientos

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

## Universidad Técnica Federico Santa María

Desarrollado con ❤️ para la comunidad estudiantil de la UTFSM.