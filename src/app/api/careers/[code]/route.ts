import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params;
    const varName = code.toLowerCase().replace(/-/g, '_');
    const carrerasDir = path.join(process.cwd(), 'src', 'data', 'carreras');
    const campuses = ['cc', 'vm', 'sj', 'vc', 'cp'];
    
    // Buscar en cada carpeta de campus
    for (const campus of campuses) {
      const filePath = path.join(carrerasDir, campus, `${varName}.ts`);
      
      if (fs.existsSync(filePath)) {
        try {
          // Importar dinámicamente usando la ruta completa
          const careerModule = await import(`../../../../data/carreras/${campus}/${varName}`);
          const carrera = careerModule[varName];
          
          if (carrera) {
            return NextResponse.json(carrera);
          }
        } catch (importError) {
          console.error(`Error importing ${campus}/${varName}:`, importError);
          continue;
        }
      }
    }
    
    return NextResponse.json({ error: 'Career not found' }, { status: 404 });
  } catch (error) {
    console.error('Error loading career:', error);
    return NextResponse.json({ error: 'Career not found' }, { status: 404 });
  }
}
