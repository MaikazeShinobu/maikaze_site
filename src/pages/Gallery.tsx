import React, { useState } from 'react';
import { ImageModal } from '../components/ImageModal';
import { BackToProfileLink } from '../components/BackToProfileLink';
import galleryData from '../data/gallery.json';
import { getGalleryImageUrl } from '../utils/galleryUtils';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <BackToProfileLink />
          <h1 className="text-4xl font-bold mb-4 mt-8">Gallery</h1>
          <p className="text-gray-300 text-lg">My Works Collection</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryData.items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
              onClick={() => setSelectedImage(getGalleryImageUrl(item.imageUrl))}
            >
              <img
                src={getGalleryImageUrl(item.imageUrl)}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 text-center">
          <BackToProfileLink />
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}