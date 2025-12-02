import { createClient } from '@supabase/supabase-js'
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as dotenv from 'dotenv'

// Cargar variables de entorno desde .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Validar que las variables estén cargadas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Variables de entorno no encontradas.')
  console.error('Asegúrate de que .env.local existe y contiene:')
  console.error('  NEXT_PUBLIC_SUPABASE_URL=...')
  console.error('  NEXT_PUBLIC_SUPABASE_ANON_KEY=...')
  process.exit(1)
}
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface CarreraMetadata {
  Nombre: string
  Link: string
  Color?: string
}

interface PlanEstudios {
  [semestre: string]: any[][]
}

const campusMap: Record<string, string> = {
  cc: 'Casa Central',
  vm: 'Viña del Mar',
  vc: 'Vitacura',
  sj: 'San Joaquín',
  cp: 'Concepción'
}

const campusCarrerasFile: Record<string, string> = {
  cc: 'carreras_casacentral.json',
  vm: 'carreras_vina.json',
  vc: 'carreras_vitacura.json',
  sj: 'carreras_sanjoaquin.json',
  cp: 'carreras_concepcion.json'
}

async function migrateData() {
  console.log('🚀 Iniciando migración a Supabase...\n')

  const dataDir = path.join(process.cwd(), 'src', 'data')
  const campusFolders = ['cc', 'vm', 'vc', 'sj', 'cp']

  for (const campusId of campusFolders) {
    const campusPath = path.join(dataDir, campusId)
    
    if (!fs.existsSync(campusPath)) {
      console.log(`⚠️  Carpeta ${campusId} no encontrada, saltando...`)
      continue
    }

    console.log(`\n📁 Procesando campus: ${campusMap[campusId]} (${campusId})`)

    // Leer archivo de metadatos de carreras
    const carrerasFilePath = path.join(campusPath, campusCarrerasFile[campusId])
    
    if (!fs.existsSync(carrerasFilePath)) {
      console.log(`⚠️  Archivo de carreras ${campusCarrerasFile[campusId]} no encontrado`)
      continue
    }

    const carrerasMetadata: CarreraMetadata[] = JSON.parse(fs.readFileSync(carrerasFilePath, 'utf-8'))

    for (const carreraMetadata of carrerasMetadata) {
      const carreraCode = carreraMetadata.Link
      const dataFile = `data_${carreraCode}.json`
      const colorFile = `colors_${carreraCode}.json`
      
      console.log(`\n  📚 Procesando carrera: ${carreraMetadata.Nombre} (${carreraCode})`)

      try {
        // Leer archivo de plan de estudios
        const dataPath = path.join(campusPath, dataFile)
        
        if (!fs.existsSync(dataPath)) {
          console.log(`    ⚠️  Archivo ${dataFile} no encontrado, saltando...`)
          continue
        }
        
        const planData: PlanEstudios = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
        
        // Leer colores si existen
        const colorPath = path.join(campusPath, colorFile)
        const colorsData: Record<string, [string, string]> = fs.existsSync(colorPath) 
          ? JSON.parse(fs.readFileSync(colorPath, 'utf-8'))
          : {}

        // Insertar carrera
        const { data: carrera, error: carreraError } = await supabase
          .from('carreras')
          .upsert({
            codigo: carreraCode,
            nombre: carreraMetadata.Nombre,
            color: carreraMetadata.Color || '#3B82F6',
            campus_id: campusId
          }, { onConflict: 'codigo' })
          .select()
          .single()

        if (carreraError) {
          console.error(`    ❌ Error insertando carrera: ${carreraError.message}`)
          continue
        }

        console.log(`    ✅ Carrera insertada: ${carrera.nombre}`)

        // Insertar categorías
        if (Object.keys(colorsData).length > 0) {
          const categorias = Object.entries(colorsData).map(([id, [color, nombre]]) => ({
            id: `${carreraCode}_${id}`,
            nombre,
            color,
            carrera_codigo: carrera.codigo
          }))

          const { error: categoriasError } = await supabase
            .from('categorias')
            .upsert(categorias, { onConflict: 'id' })

          if (categoriasError) {
            console.error(`    ❌ Error insertando categorías: ${categoriasError.message}`)
          } else {
            console.log(`    ✅ ${categorias.length} categorías insertadas`)
          }
        } else {
          console.log(`    ⚠️  No se encontró archivo de colores para ${carreraCode}`)
        }

        // Insertar asignaturas
        const asignaturas = []
        
        for (const [semestreKey, materias] of Object.entries(planData)) {
          if (!semestreKey.startsWith('s')) continue
          
          const semestreNum = Number.parseInt(semestreKey.substring(1))
          
          for (const materia of materias) {
            const [nombre, codigo, , creditos, categoria, prerequisitos] = materia
            
            asignaturas.push({
              codigo,
              nombre,
              semestre: semestreNum,
              creditos: creditos || 0,
              categoria_id: categoria ? `${carreraCode}_${categoria}` : `${carreraCode}_OTROS`,
              carrera_codigo: carrera.codigo,
              prerequisitos: prerequisitos || []
            })
          }
        }

        if (asignaturas.length > 0) {
          const { error: asignaturasError } = await supabase
            .from('asignaturas')
            .upsert(asignaturas, { onConflict: 'codigo,carrera_codigo' })

          if (asignaturasError) {
            console.error(`    ❌ Error insertando asignaturas: ${asignaturasError.message}`)
          } else {
            console.log(`    ✅ ${asignaturas.length} asignaturas insertadas`)
          }
        }

      } catch (error: any) {
        console.error(`    ❌ Error procesando ${carreraCode}: ${error.message}`)
      }
    }
  }

  console.log('\n\n✨ Migración completada!\n')
}

// Ejecutar migración
migrateData().catch(console.error)