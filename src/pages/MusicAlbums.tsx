import React from 'react';
import { BackToProfileLink } from '../components/BackToProfileLink';
import albumsData from '../data/albums.json';
import { AlbumCard } from '../components/AlbumCard';

export function MusicAlbums() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <BackToProfileLink />

        <h1 className="text-4xl font-bold mt-8 mb-6">Music Albums</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {albumsData.albums.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              releaseDate={album.releaseDate}
              coverImage={album.coverImage}
              albumUrl={album.albumUrl}
              platforms={album.platforms}
            />
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 text-center">
          <BackToProfileLink />
        </div>
      </div>
    </div>
  );
}