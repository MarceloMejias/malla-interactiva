import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: any, { params }: any) {
  const { campus, code } = params;
  const filePath = path.join(process.cwd(), 'src', 'data', campus, `colors_${code}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: 'Colores no encontrados' }, { status: 404 });
  }
}
