export function getAssetPath(path: string): string {
  if (!path) return '';
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  // Add ./ for relative path in production
  return import.meta.env.PROD ? `./${normalizedPath}` : `/${normalizedPath}`;
}