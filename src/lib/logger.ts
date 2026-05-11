const isProduction = process.env.NODE_ENV === 'production';

/**
 * A central logger utility to manage console output across the application.
 * - error and warn are always logged to ensure visibility in production.
 * - info and log are suppressed in production to keep logs clean.
 */
export const logger = {
  error: (message: string, ...args: any[]) => {
    console.error(message, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(message, ...args);
  },
  info: (message: string, ...args: any[]) => {
    if (!isProduction) {
      console.info(message, ...args);
    }
  },
  log: (message: string, ...args: any[]) => {
    if (!isProduction) {
      console.log(message, ...args);
    }
  },
};
