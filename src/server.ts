import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

// Initialize the Angular SSR app engine
const angularAppEngine = new AngularAppEngine();

/**
 * Netlify SSR handler function.
 */
export async function netlifyAppEngineHandler(
  request: Request
): Promise<Response> {
  const context = getContext();

  // Example custom API endpoints (if needed):
  // const pathname = new URL(request.url).pathname;
  // if (pathname.startsWith('/api/hello')) {
  //   return new Response(JSON.stringify({ message: 'Hello from API' }), { headers: { 'Content-Type': 'application/json' } });
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * The request handler used by Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
