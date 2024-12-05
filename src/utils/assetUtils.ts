export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use absolute paths
  if (import.meta.env.DEV) {
    return `/${normalizedPath}`;
  }
  
  // In production, use relative paths
  return `./${normalizedPath}`;
}

export function getPublicPath(): string {
  return import.meta.env.DEV ? '/' : './';
}