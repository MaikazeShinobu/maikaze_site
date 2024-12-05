const BASE_PATH = '/maikaze_site';

export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Add base path for GitHub Pages
  return `${BASE_PATH}/${normalizedPath}`;
}

export function getPublicPath(): string {
  return BASE_PATH;
}