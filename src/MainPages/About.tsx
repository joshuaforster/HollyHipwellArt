import React from 'react';
import Contact from '../PageComponents/Contact';

export default function About() {
    return (
        <section className="bg-white dark:bg-dark-gray">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="lg:flex lg:space-x-16">
                    <div className="lg:w-2/3">
                        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-white">
                            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                                About Holly
                            </h2>
                            <p className="mb-4 font-light">
                                Holly is an artist from Norwich who started doing life drawings at university. Even though she has Friedreich's ataxia, this doesn't stop her from drawing. She is inspired by impressionist painters as well as abstract work.
                            </p>
                            <p className="mb-4 font-light">
                                Holly likes to experiment with different mediums and explore new techniques. She believes that art should be fun and expressive, not restricted by rules or boundaries.
                            </p>
                            <p className="mb-4 font-light">
                                Holly always tries to capture the viewer's attention and imagination through her work. Her art blends intricate drawings with vibrant watercolours, creating captivating pieces that stand out.
                            </p>
                            <div className="flex mt-4">
                                <img className='w-full max-w-screen-md' alt="Abstract artwork by Holly" src='images/bg2.jpg'/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                            <div className="w-full h-[300px] overflow-hidden relative">
                                <img
                                    src="images/holly2.png"
                                    alt="Holly working on her art"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full h-[300px] overflow-hidden relative">
                                <img
                                    src="images/hollybo.png"
                                    alt="Holly with her dog Bo"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full h-[300px] overflow-hidden relative">
                                <img
                                    src="images/exhibition.png"
                                    alt="Art exhibition featuring Holly's work"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/3">
                        <div className="sticky top-0 p-4 shadow-lg bg-white dark:bg-dark-gray dark:shadow-xl dark:shadow-black rounded-lg">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
