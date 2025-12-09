// Service Worker para Malla Interactiva UTFSM
// Versión: 1.0.0

const CACHE_NAME = 'malla-interactiva-v1';
const STATIC_CACHE = 'malla-static-v1';
const DYNAMIC_CACHE = 'malla-dynamic-v1';

// Archivos críticos para cachear (funcionamiento offline básico)
const STATIC_ASSETS = [
  '/',
  '/site.webmanifest',
  // Next.js genera estos automáticamente, no los incluimos aquí
];

// Archivos que nunca deben cachearse
const EXCLUDE_CACHE = [
  '/api/',
  '/_next/webpack-hmr',
  '/_next/static/chunks/webpack-',
  '/admin'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Eliminar caches antiguos
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE &&
                     cacheName.startsWith('malla-');
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim();
      })
  );
});

// Interceptar requests (estrategia Network First con fallback a Cache)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip excluded URLs
  if (EXCLUDE_CACHE.some(pattern => url.pathname.startsWith(pattern))) {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) return;
  
  event.respondWith(
    networkFirstStrategy(request)
  );
});

// Estrategia Network First con Cache Fallback
async function networkFirstStrategy(request) {
  try {
    // Intentar obtener de la red primero
    const networkResponse = await fetch(request);
    
    // Si es exitoso, cachear y devolver
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      // Clonar la respuesta porque solo se puede usar una vez
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    // Si la red falla, intentar desde cache
    return await getCachedResponse(request);
    
  } catch (error) {
    // Si no hay red, intentar desde cache
    console.log('[SW] Network failed, trying cache:', request.url);
    return await getCachedResponse(request);
  }
}

// Obtener respuesta desde cache
async function getCachedResponse(request) {
  // Intentar desde cache dinámico primero
  let cachedResponse = await caches.match(request, { cacheName: DYNAMIC_CACHE });
  
  if (cachedResponse) {
    console.log('[SW] Serving from dynamic cache:', request.url);
    return cachedResponse;
  }
  
  // Luego intentar desde cache estático
  cachedResponse = await caches.match(request, { cacheName: STATIC_CACHE });
  
  if (cachedResponse) {
    console.log('[SW] Serving from static cache:', request.url);
    return cachedResponse;
  }
  
  // Si es una página, devolver la página principal (SPA fallback)
  if (request.destination === 'document') {
    console.log('[SW] Serving app shell for:', request.url);
    return await caches.match('/');
  }
  
  // Si nada funciona, devolver error
  console.log('[SW] No cache available for:', request.url);
  return new Response('Offline - Content not available', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'text/plain' }
  });
}

// Limpiar caches antiguos periódicamente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCache();
  }
});

async function cleanOldCache() {
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  
  // Mantener solo los últimos 50 elementos en cache dinámico
  if (requests.length > 50) {
    const toDelete = requests.slice(0, requests.length - 50);
    await Promise.all(toDelete.map(request => cache.delete(request)));
    console.log('[SW] Cleaned old cache entries:', toDelete.length);
  }
}
