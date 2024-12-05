const isProduction = import.meta.env.PROD;
const BASE_PATH = isProduction ? '/maikaze_site' : '';

export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Add base path for GitHub Pages only in production
  return isProduction ? `${BASE_PATH}/${normalizedPath}` : `/${normalizedPath}`;
}

export function getPublicPath(): string {
  return BASE_PATH;
}