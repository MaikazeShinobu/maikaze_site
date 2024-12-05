import { getAssetPath } from './assetUtils';

export function getGalleryImageUrl(imagePath: string): string {
  try {
    return getAssetPath(imagePath);
  } catch (error) {
    console.error(`Error loading gallery image: ${imagePath}`, error);
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&h=800';
  }
}