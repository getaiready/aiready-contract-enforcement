import * as Sentry from '@sentry/nextjs';

/**
 * Standard Next.js instrumentation entry point.
 * Initializes Sentry for Node.js and Edge runtimes.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1.0,
      debug: false,
      beforeSend(event) {
        // Filter out known noise
        const errorMessage = event.exception?.values?.[0]?.value || '';
        if (
          errorMessage.includes('NEXT_NOT_FOUND') ||
          errorMessage.includes('NEXT_REDIRECT') ||
          // Filter transient ENOENT errors from Next.js file watcher
          (errorMessage.includes('ENOENT') && errorMessage.includes('scandir'))
        ) {
          return null;
        }
        return event;
      },
    });
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NODE_ENV || 'development',
      tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1.0,
      debug: false,
      beforeSend(event) {
        const errorMessage = event.exception?.values?.[0]?.value || '';
        if (
          errorMessage.includes('NEXT_NOT_FOUND') ||
          errorMessage.includes('NEXT_REDIRECT') ||
          // Filter transient ENOENT errors from Next.js file watcher
          (errorMessage.includes('ENOENT') && errorMessage.includes('scandir'))
        ) {
          return null;
        }
        return event;
      },
    });
  }
}

/**
 * Handle request errors by reporting them to Sentry.
 *
 * @param err - The caught error
 * @param request - Original request object
 * @param context - Request context
 */
export async function onRequestError(
  err: unknown,
  request: unknown,
  context: unknown
) {
  Sentry.captureRequestError(err, request as any, context as any);
}
