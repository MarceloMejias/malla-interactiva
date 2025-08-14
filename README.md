# Malla Interactiva - Ingeniería en Informática UTFSM

Una aplicación web interactiva para calcular el progreso académico de la carrera de Ingeniería en Informática de la Universidad Técnica Federico Santa María.

## 🚀 Características

- **Visualización completa de la malla curricular**: Todas las asignaturas organizadas por semestre
- **Calculadora de créditos**: Marca asignaturas como aprobadas y calcula automáticamente tu progreso
- **Mini-tarjetas de prerrequisitos**: Los prerrequisitos aparecen como chips clicables que te llevan directamente al ramo
- **Navegación inteligente**: Haz clic en cualquier prerrequisito para navegar automáticamente a esa asignatura
- **Estadísticas en tiempo real**: 
  - Créditos aprobados vs totales
  - Número de asignaturas aprobadas
  - Porcentaje de progreso general
- **Persistencia de datos**: Tu progreso se guarda automáticamente en el navegador
- **Categorización por colores**: Cada tipo de asignatura tiene un color distintivo
- **Información detallada**: Códigos, créditos SCT, y prerrequisitos para cada ramo
- **Diseño responsivo**: Funciona perfectamente en desktop y móvil

## 🎨 Categorías de Asignaturas

- **🟡 Humanistas, libres y deportes** (HUM)
- **🔵 Plan Común** (PC) 
- **🟦 Fundamentos de Informática** (FI)
- **🟨 Ingeniería de Software** (IS)
- **🟣 Industrias** (IND)
- **🟥 Transversal e Integración** (TIN)
- **🟠 Electivos Informática** (ELEC)

## 💻 Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **React Hooks** - Gestión de estado

## 🎯 Cómo Usar

1. **Navegar por los semestres**: Cada semestre está claramente separado con sus asignaturas correspondientes
2. **Marcar asignaturas**:
   - Haz clic en cualquier asignatura para abrir el menú de estado
   - Selecciona "Aprobada" o "Pendiente"
3. **Navegar por prerrequisitos**:
   - Cada asignatura muestra sus prerrequisitos como mini-tarjetas coloreadas
   - Haz clic en cualquier prerrequisito para navegar automáticamente a esa asignatura
   - Los prerrequisitos muestran su estado: ✓ para aprobados
4. **Ver tu progreso**: Las estadísticas se actualizan automáticamente en la parte superior
5. **Reiniciar**: Usa el botón "Reiniciar Progreso" para limpiar todos los datos

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📊 Estructura de Datos

La aplicación utiliza los datos oficiales de la malla curricular de Ingeniería en Informática UTFSM:

- `data_INGINF.json`: Contiene todas las asignaturas organizadas por semestre
- `colors_INGINF.json`: Define los colores y categorías de cada tipo de asignatura
- `carreras.json`: Lista de todas las carreras disponibles

## 🎓 Información Académica

- **Universidad**: Universidad Técnica Federico Santa María
- **Carrera**: Ingeniería en Informática
- **Total de créditos**: 240 créditos SCT
- **Duración**: 8 semestres

## 🔧 Funcionalidades Avanzadas

- **Persistencia local**: Los datos se guardan automáticamente en localStorage
- **Navegación por prerrequisitos**: Haz clic en cualquier prerrequisito para ir directamente a esa asignatura
- **Indicadores visuales de estado**: Los prerrequisitos muestran claramente si están aprobados o pendientes
- **Animaciones suaves**: Transiciones y efectos visuales para una mejor experiencia de usuario
- **Progreso por semestre**: Ve tu avance en cada semestre individualmente
- **Interfaz intuitiva**: Colores y estados visuales claros para cada asignatura

## 📱 Responsive Design

La aplicación está optimizada para funcionar en:
- 💻 Desktop (pantallas grandes)
- 💊 Tablet (pantallas medianas)
- 📱 Móvil (pantallas pequeñas)

---

Desarrollado con ❤️ para estudiantes de Ingeniería en Informática UTFSM
