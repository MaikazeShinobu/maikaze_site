export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Add ./ prefix for relative paths
  return `./${normalizedPath}`;
}

export function getPublicPath(): string {
  return './';
}