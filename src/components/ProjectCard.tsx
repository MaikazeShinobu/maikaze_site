import React from 'react';
import { getProjectImageUrl } from '../utils/projectUtils';
import { PROJECT_CATEGORIES, getCategoryColor, getCategoryLabel } from '../utils/projectUtils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  categoryId: number;
}

export function ProjectCard({ title, description, imageUrl, link, categoryId }: ProjectCardProps) {
  const { borderColor, bgColor } = getCategoryColor(categoryId);
  
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block aspect-video overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] ${borderColor} ${bgColor}`}
      style={{ borderWidth: '3px' }}
    >
      <div className="relative h-full w-full">
        <img
          src={getProjectImageUrl(imageUrl)}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${bgColor}`}>
              {getCategoryLabel(categoryId)}
            </span>
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}