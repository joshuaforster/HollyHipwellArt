import React, { useEffect, useState } from 'react';
import ImageGallery from '../PageComponents/imagegallery';
import client from '../contentfulClient';

type GalleryItem = {
  type: 'image';
  imageUrl: string;
  category: string;
};

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'galleryItem',
        });
        const items: GalleryItem[] = response.items.map((item: any) => ({
          type: 'image' as const,
          imageUrl: item.fields.imageUrl.fields.file.url,
          category: item.fields.category.toLowerCase(),
        }));
        setGalleryItems(items);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Gallery
          </h2>
        </div>
      </div>

      {galleryItems.length > 0 && (
        <>
          <div className="bg-light-gray dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Animals</h2>
            </div>
            <ImageGallery items={galleryItems.filter(item => item.category === 'animal')} category={'animal'} />
          </div>

          <div className="bg-white dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Abstract</h2>
            </div>
            <ImageGallery items={galleryItems.filter(item => item.category === 'abstract')} category={'abstract'} />
          </div>

          <div className="bg-light-gray dark:bg-dark-gray py-8">
            <div className="flex justify-center items-center h-full">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Figures</h2>
            </div>
            <ImageGallery items={galleryItems.filter(item => item.category === 'figure')} category={'figure'} />
          </div>
        </>
      )}
    </section>
  );
}
