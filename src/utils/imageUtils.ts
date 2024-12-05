export function getImagePath(path: string): string {
  if (!path) return '';
  
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development
  if (import.meta.env.DEV) {
    return `/${normalizedPath}`;
  }
  
  // In production (GitHub Pages)
  return `/${normalizedPath}`;
}

export function getPublicPath(): string {
  return '';
}