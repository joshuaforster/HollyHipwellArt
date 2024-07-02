// src/pages/Gallery.tsx
import React, { useEffect, useState } from 'react';
import ImageGallery from '../PageComponents/imagegallery';
import contentfulClient from '../contentfulClient';
import { GalleryItem } from '../CustomComponents/types';

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'galleryItem',
        });

        const items = await Promise.all(
          response.items.map(async (item: any) => {
            const imageUrl = item.fields.imageUrl?.fields?.file?.url;

            if (!imageUrl) {
              console.error('Image URL is undefined for item', item);
              return null;
            }

            return {
              type: 'image' as const,
              title: item.fields.title,
              imageUrl: `https:${imageUrl}`,
              altText: item.fields.altText,
              category: item.fields.category,
            };
          })
        );

        const validItems = items.filter(item => item !== null) as GalleryItem[];
        setGalleryItems(validItems);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchGalleryItems();
  }, []);

  const animals = galleryItems.filter(item => item.category === 'Animal');
  const abstract = galleryItems.filter(item => item.category === 'Abstract');
  const figures = galleryItems.filter(item => item.category === 'Figure');

  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-gray py-8">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Abstract</h2>
        </div>
        <ImageGallery items={abstract} />
      </div>

      <div className="bg-light-gray dark:bg-dark-gray py-8">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Animals</h2>
        </div>
        <ImageGallery items={animals} />
      </div>

      <div className="bg-light-gray dark:bg-dark-gray py-8">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Figures</h2>
        </div>
        <ImageGallery items={figures} />
      </div>
    </section>
  );
}
