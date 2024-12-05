export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `./${normalizedPath}`;
}

export function getImagePath(path: string): string {
  if (!path) return '';
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return new URL(`../assets/${normalizedPath}`, import.meta.url).href;
}

export function getPublicPath(): string {
  return './';
}