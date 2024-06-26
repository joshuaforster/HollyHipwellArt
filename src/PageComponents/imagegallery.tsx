import React, { useState } from 'react';
import { GalleryItem } from '../CustomComponents/types';
import SingleImage from '../CustomComponents/singleImage';

interface ImageGalleryProps {
  items: GalleryItem[];
  category?: string;
}

export default function ImageGallery({ items, category }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filteredItems = category ? items.filter(item => item.category === category) : items;

  const handlePrevious = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % filteredItems.length);
    }
  };

  const closeFullscreen = () => {
    setCurrentIndex(null);
  };

  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-100 overflow-hidden border border-black dark:border-white cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-full h-full">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover"
                />
                <h3 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <SingleImage
            imageUrl={filteredItems[currentIndex].imageUrl}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onClose={closeFullscreen}
          />
        </div>
      )}
    </section>
  );
}
