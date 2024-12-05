import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slidesData from '../data/slides.json';
import { getImagePath } from '../utils/imageUtils';

interface Topic {
  type: 'youtube' | 'note';
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const topics: Topic[] = slidesData.slides;

export function TopicsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topics.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % topics.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const currentTopic = topics[currentIndex];

  return (
    <div className="relative group">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <a
          href={currentTopic.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
          <img
            src={getImagePath(currentTopic.thumbnail)}
            alt={currentTopic.title}
            className="w-full h-full object-cover rounded-lg opacity-90 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="inline-block px-2 py-0.5 rounded-full text-sm mb-1 font-medium"
                style={{
                  backgroundColor: currentTopic.type === 'youtube' ? 'rgb(255, 0, 0)' : 'rgb(41, 195, 41)'
                }}
              >
                {currentTopic.type === 'youtube' ? 'YouTube' : 'Note'}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{currentTopic.title}</h3>
              <p className="text-sm text-gray-200">{currentTopic.description}</p>
            </div>
          </div>
        </a>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
        {topics.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}