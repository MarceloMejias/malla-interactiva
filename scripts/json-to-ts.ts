import * as fs from 'fs';
import * as path from 'path';

interface RawSubject {
  0: string; // name
  1: string; // code
  2: number; // usmCredits (no usado)
  3: number; // sctCredits
  4: string; // type
  5?: string[]; // prerequisites
}

interface RawCareerData {
  [semester: string]: RawSubject[];
}

interface RawColorData {
  [key: string]: [string, string]; // [color, nombre]
}

const campusMap: Record<string, 'cc' | 'vm' | 'sj' | 'vc' | 'cp'> = {
  'cc': 'cc',
  'vm': 'vm',
  'sj': 'sj',
  'vc': 'vc',
  'cp': 'cp',
};

const careerNames: Record<string, string> = {
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
  // Agregar más según necesites
};

function convertJsonToTs(campus: string, careerCode: string) {
  const dataPath = path.join(__dirname, '..', 'src', 'data', campus, `data_${careerCode}.json`);
  const colorsPath = path.join(__dirname, '..', 'src', 'data', campus, `colors_${careerCode}.json`);
  
  if (!fs.existsSync(dataPath)) {
    console.log(`⏭️  Saltando ${careerCode} - archivo no encontrado`);
    return null;
  }

  const rawData: RawCareerData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const rawColors: RawColorData = fs.existsSync(colorsPath) 
    ? JSON.parse(fs.readFileSync(colorsPath, 'utf-8'))
    : {};

  // Extraer color principal (primer color encontrado o default)
  const mainColor = Object.values(rawColors)[0]?.[0] || '#6B7280';
  
  // Obtener nombre de la carrera
  const careerName = careerNames[careerCode] || careerCode;
  const isOldVersion = careerCode.endsWith('-0');
  const displayName = isOldVersion ? `${careerName} (Malla Antigua)` : careerName;

  // Construir categorías
  const categorias = Object.entries(rawColors).map(([id, [color, nombre]]) => ({
    id,
    nombre,
    color,
  }));

  // Construir asignaturas
  const asignaturas: any[] = [];
  Object.entries(rawData).forEach(([semester, subjects]) => {
    subjects.forEach((subject: RawSubject) => {
      asignaturas.push({
        name: subject[0],
        code: subject[1],
        sctCredits: subject[3],
        type: subject[4],
        prerequisites: subject[5] || [],
        semester,
      });
    });
  });

  // Generar código TypeScript
  const varName = careerCode.toLowerCase().replace('-', '_');
  const tsContent = `import { Carrera } from '../types';

export const ${varName}: Carrera = {
  codigo: '${careerCode}',
  nombre: '${displayName}',
  campus: '${campusMap[campus]}',
  color: '${mainColor}',
  
  categorias: ${JSON.stringify(categorias, null, 4)},

  asignaturas: ${JSON.stringify(asignaturas, null, 4)},
};
`;

  // Escribir archivo
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'carreras', `${varName}.ts`);
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
  
  console.log(`✅ Convertido: ${careerCode} (${campus})`);
  
  return {
    varName,
    code: careerCode,
    name: displayName,
    campus: campusMap[campus],
    color: mainColor,
  };
}

function main() {
  console.log('🚀 Convirtiendo archivos JSON a TypeScript...\n');

  const srcDataPath = path.join(__dirname, '..', 'src', 'data');
  const campuses = ['cc', 'vm', 'sj', 'vc', 'cp'];
  
  const allCareers: Record<string, any[]> = {
    cc: [],
    vm: [],
    sj: [],
    vc: [],
    cp: [],
  };

  const imports: string[] = [];
  const carrerasMap: string[] = [];

  campuses.forEach(campus => {
    const campusPath = path.join(srcDataPath, campus);
    if (!fs.existsSync(campusPath)) return;

    const files = fs.readdirSync(campusPath);
    const dataFiles = files.filter(f => f.startsWith('data_') && f.endsWith('.json'));

    dataFiles.forEach(file => {
      const careerCode = file.replace('data_', '').replace('.json', '');
      const result = convertJsonToTs(campus, careerCode);
      
      if (result) {
        allCareers[campus].push({
          Nombre: result.name,
          Link: result.code,
          Color: result.color,
        });
        imports.push(`import { ${result.varName} } from './${result.varName}';`);
        carrerasMap.push(`  '${result.code}': ${result.varName},`);
      }
    });
  });

  // Generar index.ts
  const indexContent = `// Índice centralizado de todas las carreras
import { Carrera, CarreraSimple } from '../types';
${imports.join('\n')}

// Mapa de todas las carreras por código
export const carreras: Record<string, Carrera> = {
${carrerasMap.join('\n')}
};

// Lista de carreras por campus para el selector
export const carrerasPorCampus = {
  cc: ${JSON.stringify(allCareers.cc, null, 4)},
  
  vm: ${JSON.stringify(allCareers.vm, null, 4)},
  
  sj: ${JSON.stringify(allCareers.sj, null, 4)},
  
  vc: ${JSON.stringify(allCareers.vc, null, 4)},
  
  cp: ${JSON.stringify(allCareers.cp, null, 4)},
};

// Función helper para obtener una carrera
export const getCarrera = (codigo: string): Carrera | undefined => {
  return carreras[codigo];
};

// Función helper para obtener carreras de un campus
export const getCarrerasPorCampus = (campus: 'cc' | 'vm' | 'sj' | 'vc' | 'cp'): CarreraSimple[] => {
  return carrerasPorCampus[campus] || [];
};
`;

  const indexPath = path.join(__dirname, '..', 'src', 'data', 'carreras', 'index.ts');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');

  console.log('\n✨ Conversión completa!');
  console.log(`📊 Total carreras convertidas: ${carrerasMap.length}`);
  console.log(`   - Casa Central: ${allCareers.cc.length}`);
  console.log(`   - Viña del Mar: ${allCareers.vm.length}`);
  console.log(`   - San Joaquín: ${allCareers.sj.length}`);
  console.log(`   - Vitacura: ${allCareers.vc.length}`);
  console.log(`   - Concepción: ${allCareers.cp.length}`);
}

main();
