export function getAlbumImageUrl(imagePath: string): string {
  try {
    // Remove leading slash if present
    const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `/${normalizedPath}`;
  } catch (error) {
    console.error(`Error loading album image: ${imagePath}`, error);
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=800';
  }
}