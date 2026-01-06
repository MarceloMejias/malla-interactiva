#!/usr/bin/env tsx
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Campus {
  name: string;
  code: string;
  path: string;
}

const campuses: Campus[] = [
  { name: 'Casa Central', code: 'cc', path: './src/data/carreras/cc' },
  { name: 'Viña del Mar', code: 'vm', path: './src/data/carreras/vm' },
  { name: 'San Joaquín', code: 'sj', path: './src/data/carreras/sj' },
  { name: 'Vitacura', code: 'vc', path: './src/data/carreras/vc' },
  { name: 'Concepción', code: 'cp', path: './src/data/carreras/cp' },
];

function getCareerFiles(campusPath: string): string[] {
  try {
    return readdirSync(campusPath)
      .filter(file => file.endsWith('.ts') && file !== 'index.ts')
      .map(file => file.replace('.ts', ''));
  } catch {
    return [];
  }
}

function generateImportName(fileName: string, campusCode: string): { importName: string; key: string } {
  // Casos especiales donde hay conflictos entre campus
  if (fileName === 'eli') {
    return { importName: `eli_${campusCode}`, key: campusCode === 'cc' ? 'eli' : `eli-${campusCode}` };
  }
  if (fileName === 'icom') {
    return { importName: `icom_${campusCode}`, key: campusCode === 'cc' ? 'icom' : `icom-${campusCode}` };
  }
  return { importName: fileName, key: fileName.replace('_', '-') };
}

function generateIndex() {
  let imports = "import { Carrera } from '@/types/curriculum';\n\n";
  const allCareersEntries: string[] = [];
  const careersByCampusEntries: Record<string, string[]> = {};
  
  // Rastrear nombres de imports para evitar conflictos
  const usedImportNames = new Set<string>();

  // Procesar cada campus
  for (const campus of campuses) {
    const files = getCareerFiles(campus.path);
    if (files.length === 0) {
      careersByCampusEntries[campus.code] = [];
      continue;
    }

    imports += `// ${campus.name}\n`;
    const campusCareersList: string[] = [];

    for (const file of files) {
      const { importName, key } = generateImportName(file, campus.code);
      
      // Generar nombre único de import
      let uniqueImportName = file;
      if (usedImportNames.has(file)) {
        uniqueImportName = `${file}_${campus.code}`;
      }
      usedImportNames.add(file);
      
      imports += `import { ${file}${uniqueImportName !== file ? ` as ${uniqueImportName}` : ''} } from './${campus.code}/${file}';\n`;
      
      allCareersEntries.push(`  '${key}': ${uniqueImportName},`);
      campusCareersList.push(
        `    { Nombre: ${uniqueImportName}.nombre, Link: '${key}', Color: ${uniqueImportName}.color },`
      );
    }

    imports += '\n';
    careersByCampusEntries[campus.code] = campusCareersList;
  }

  // Generar objeto allCareers
  let allCareersCode = '\n// Mapa de todas las carreras\nconst allCareers: Record<string, Carrera> = {\n';
  allCareersCode += allCareersEntries.join('\n');
  allCareersCode += '\n};\n\n';

  // Generar función getCareer
  let getCareerCode = `// Función para obtener una carrera
export function getCareer(code: string): Carrera | undefined {
  return allCareers[code.toLowerCase()];
}\n\n`;

  // Generar careersByCampus
  let careersByCampusCode = '// Índices por campus\nexport const careersByCampus = {\n';
  for (const campus of campuses) {
    const entries = careersByCampusEntries[campus.code];
    if (entries.length === 0) {
      careersByCampusCode += `  ${campus.code}: [],\n`;
    } else {
      careersByCampusCode += `  ${campus.code}: [\n`;
      careersByCampusCode += entries.join('\n');
      careersByCampusCode += "\n  ].sort((a, b) => a.Nombre.localeCompare(b.Nombre, 'es')),\n";
    }
  }
  careersByCampusCode += '};\n';

  // Escribir archivo
  const fullCode = imports + allCareersCode + getCareerCode + careersByCampusCode;
  const outputPath = join(process.cwd(), 'src/data/carreras/index.ts');
  writeFileSync(outputPath, fullCode, 'utf-8');
  
  console.log('Índice de carreras generado exitosamente');
  console.log(`Total de carreras: ${allCareersEntries.length}`);
  for (const campus of campuses) {
    const count = careersByCampusEntries[campus.code].length;
    if (count > 0) {
      console.log(`   - ${campus.name}: ${count}`);
    }
  }
}

// Ejecutar
generateIndex();
