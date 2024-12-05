export function getImagePath(path: string): string {
  if (!path) return '';
  
  // Remove leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Handle case-sensitive file extensions
  if (normalizedPath.includes('Background')) {
    return './images/Background.PNG';
  }
  
  return `./${normalizedPath}`;
}