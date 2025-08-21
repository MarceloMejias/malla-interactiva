import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CAMPUSES = ['cc', 'vm', 'sj', 'vc', 'cp'];

export async function GET() {
  const baseDir = path.join(process.cwd(), 'src', 'data');
  const careersByCampus: Record<string, any[]> = {};

  for (const campus of CAMPUSES) {
    const campusDir = path.join(baseDir, campus);
    let careers: any[] = [];
    try {
      const files = fs.readdirSync(campusDir);
      for (const file of files) {
        if (file.startsWith('data_') && file.endsWith('.json')) {
          const filePath = path.join(campusDir, file);
          const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          careers.push({
            nombre: data.nombre,
            codigo: data.codigo,
            color: data.color || undefined
          });
        }
      }
    } catch (e) {
      careers = [];
    }
  careersByCampus[campus] = careers.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
  }

  return NextResponse.json(careersByCampus);
}
