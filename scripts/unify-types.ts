#!/usr/bin/env tsx
/**
 * Script para unificar tipos duplicados
 * Reemplaza imports de '../types' por '@/types/curriculum' en archivos de carreras
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const carrerasDir = join(process.cwd(), 'src', 'data', 'carreras');

function getAllCareerFiles(dir: string): string[] {
  const files: string[] = [];
  
  function traverse(currentDir: string) {
    const entries = readdirSync(currentDir);
    
    for (const entry of entries) {
      const fullPath = join(currentDir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (entry.endsWith('.ts') && entry !== 'index.ts') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function updateFile(filePath: string): boolean {
  try {
    let content = readFileSync(filePath, 'utf-8');
    let modified = false;
    
    // Reemplazar import de Carrera
    if (content.includes("import { Carrera } from '../../types';")) {
      content = content.replace(
        "import { Carrera } from '../../types';",
        "import { Carrera } from '@/types/curriculum';"
      );
      modified = true;
    }
    
    if (modified) {
      writeFileSync(filePath, content, 'utf-8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error procesando ${filePath}:`, error);
    return false;
  }
}

// Main
const files = getAllCareerFiles(carrerasDir);
console.log(`📁 Encontrados ${files.length} archivos de carreras\n`);

let updated = 0;
let skipped = 0;

for (const file of files) {
  const fileName = file.split('/').pop();
  if (updateFile(file)) {
    console.log(`✅ ${fileName}`);
    updated++;
  } else {
    skipped++;
  }
}

console.log(`\n📊 Resumen:`);
console.log(`   Actualizados: ${updated}`);
console.log(`   Sin cambios: ${skipped}`);
console.log(`   Total: ${files.length}`);
