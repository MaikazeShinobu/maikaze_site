import React from 'react';
import { getAlbumImageUrl } from '../utils/albumUtils';

interface Platform {
  [key: string]: string;
}

interface AlbumCardProps {
  title: string;
  releaseDate: string;
  coverImage: string;
  albumUrl: string;
  platforms: Platform;
}

export function AlbumCard({ title, releaseDate, coverImage, albumUrl, platforms }: AlbumCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden group hover:bg-gray-900/70 transition-colors duration-300">
      <a href={albumUrl} target="_blank" rel="noopener noreferrer">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={getAlbumImageUrl(coverImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-400 mb-4">{releaseDate}</p>
        <div className="space-y-2">
          {Object.entries(platforms).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}