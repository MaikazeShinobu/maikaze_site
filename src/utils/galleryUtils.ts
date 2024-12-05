import { getImagePath } from './imageUtils';

export function getGalleryImageUrl(imagePath: string): string {
  try {
    return getImagePath(imagePath);
  } catch (error) {
    console.error(`Error loading gallery image: ${imagePath}`, error);
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=800';
  }
}