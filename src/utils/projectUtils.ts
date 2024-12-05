export function getProjectImageUrl(imagePath: string): string {
  try {
    const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `/${normalizedPath}`;
  } catch (error) {
    console.error(`Error loading project image: ${imagePath}`, error);
    return 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&h=500';
  }
}

export const PROJECT_CATEGORIES = {
  ALL: -1,
  IN_PROGRESS: 0,
  COMPLETED: 1,
  DIFFICULT: 2,
  INCOMPLETE: 3,
} as const;

export const getCategoryLabel = (categoryId: number): string => {
  switch (categoryId) {
    case PROJECT_CATEGORIES.IN_PROGRESS:
      return '進行中';
    case PROJECT_CATEGORIES.COMPLETED:
      return '達成済み';
    case PROJECT_CATEGORIES.DIFFICULT:
      return '諸般の事情で厳しそう';
    case PROJECT_CATEGORIES.INCOMPLETE:
      return '未達成';
    default:
      return 'ALL';
  }
};

interface CategoryColors {
  borderColor: string;
  bgColor: string;
}

export const getCategoryColor = (categoryId: number): CategoryColors => {
  switch (categoryId) {
    case PROJECT_CATEGORIES.IN_PROGRESS:
      return {
        borderColor: 'border-red-500',
        bgColor: 'bg-red-500/20'
      };
    case PROJECT_CATEGORIES.COMPLETED:
      return {
        borderColor: 'border-green-500',
        bgColor: 'bg-green-500/20'
      };
    case PROJECT_CATEGORIES.DIFFICULT:
      return {
        borderColor: 'border-yellow-500',
        bgColor: 'bg-yellow-500/20'
      };
    case PROJECT_CATEGORIES.INCOMPLETE:
      return {
        borderColor: 'border-white',
        bgColor: 'bg-white/20'
      };
    default:
      return {
        borderColor: 'border-gray-500',
        bgColor: 'bg-gray-500/20'
      };
  }
};