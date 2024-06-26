import React from 'react';
import Button from '../CustomComponents/buttons';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-dark-gray">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">
            Discover Unique Abstract Art by Holly
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center md:text-left">
            Explore a collection of captivating abstract art pieces that blend intricate drawings with vibrant watercolours. Perfect for adding a touch of creativity to any space.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="mr-4" variant="primary" to="/gallery">View Gallery</Button>
            <Button variant="secondary" to="/about">Learn About Holly</Button>
          </div>
        </div>
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <img
            className="w-full md:w-auto"
            src="/images/hollycanvas.png"
            alt="abstract art"
            style={{ maxHeight: '75vh' }}
          />
        </div>                
      </div>
    </section>
  );
}