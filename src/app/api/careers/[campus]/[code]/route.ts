import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Params {
  params: { campus: string; code: string };
}

export async function GET(req: Request, { params }: Params) {
  const { campus, code } = params;
  const dataPath = path.join(process.cwd(), 'src', 'data', campus, `data_${code}.json`);
  const colorsPath = path.join(process.cwd(), 'src', 'data', campus, `colors_${code}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    let colors = {};
    try {
      colors = JSON.parse(fs.readFileSync(colorsPath, 'utf-8'));
    } catch (e) {
      colors = {};
    }
    return NextResponse.json({ ...data, colors });
  } catch (e) {
    return NextResponse.json({ error: 'Carrera no encontrada' }, { status: 404 });
  }
}
