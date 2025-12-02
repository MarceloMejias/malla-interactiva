import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const carrerasDir = path.join(process.cwd(), 'src', 'data', 'carreras');
    const campuses = ['cc', 'vm', 'sj', 'vc', 'cp'];
    
    const careers: Record<string, any[]> = {
      cc: [],
      vm: [],
      sj: [],
      vc: [],
      cp: [],
    };
    
    // Leer cada carpeta de campus
    for (const campus of campuses) {
      const campusDir = path.join(carrerasDir, campus);
      
      if (!fs.existsSync(campusDir)) continue;
      
      const files = fs.readdirSync(campusDir);
      const careerFiles = files.filter(f => f.endsWith('.ts'));
      
      // Leer cada archivo y extraer metadata
      for (const file of careerFiles) {
        const filePath = path.join(campusDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Extraer código, nombre y color usando regex
        const codigoMatch = content.match(/codigo:\s*['"](.+?)['"]/);
        const nombreMatch = content.match(/nombre:\s*['"](.+?)['"]/);
        const colorMatch = content.match(/color:\s*['"](.+?)['"]/);
        
        if (codigoMatch && nombreMatch && colorMatch) {
          careers[campus].push({
            Nombre: nombreMatch[1],
            Link: codigoMatch[1],
            Color: colorMatch[1],
          });
        }
      }
    }
    
    return NextResponse.json(careers);
  } catch (error) {
    console.error('Error loading careers:', error);
    return NextResponse.json({ error: 'Failed to load careers' }, { status: 500 });
  }
}
