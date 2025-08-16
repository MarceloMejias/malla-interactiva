import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parámetros personalizables
    const title = searchParams.get('title') || 'Malla Interactiva UTFSM';
    const subtitle = searchParams.get('subtitle') || 'Calculadora de progreso académico';
    const carrera = searchParams.get('carrera') || '';
    const theme = searchParams.get('theme') || 'default';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Main title */}
          <div
            style={{
              color: '#ffffff',
              fontSize: '72px',
              fontWeight: '800',
              textAlign: 'center',
              lineHeight: '1.1',
              marginBottom: '24px',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: '#cbd5e1',
              fontSize: '36px',
              fontWeight: '400',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            {subtitle}
          </div>

          {/* Career badge (if provided) */}
          {carrera && (
            <div
              style={{
                background: '#06b6d4',
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '600',
                padding: '12px 32px',
                borderRadius: '50px',
              }}
            >
              {carrera}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
