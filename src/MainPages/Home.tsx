import React from "react";
import Hero from "../PageComponents/Hero";
import TestimonialSlider from "../PageComponents/Reviews";
import Button from "../CustomComponents/buttons";
import { useTheme } from '../CustomComponents/darkmode';

export default function Home() {
    const { theme } = useTheme();

    return (
        <section>
            <Hero />
            <section className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0">
                    <div className="text-center mx-auto max-w-screen-xl px-4 justify-center items-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured With...</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                        <img src={theme === 'dark' ? "/images/laurablakedark.png" : "/images/laurablake.png"} alt="Laura Blake" className="w-1/2 md:w-1/6" />
                        <img src={theme === "dark" ? "/images/franksbardark.png" : "/images/franks.png"} alt="Franks" className="w-1/2 md:w-1/6" />
                        <img src={theme === "dark" ? "/images/anterosdark.png" : "/images/anteros.png"} alt="Anteros" className="w-1/2 md:w-1/6" />
                    </div>
                </div>
            </section>

            <div className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 md:grid-cols-12">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                            <div className="h-[500px] overflow-hidden relative">
                                <img
                                    src="images/Group 44.png"
                                    alt="Abstract art piece 1"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                            <div className="h-[500px] overflow-hidden relative">
                                <img
                                    src="images/rabbit.webp"
                                    alt="Rabbit art piece"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                            <div className="h-[500px] overflow-hidden relative">
                                <img
                                    src="images/abstractmockup.webp"
                                    alt="Abstract art piece 2"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white dark:bg-dark-gray">
                <div className="mx-auto max-w-screen-xl px-4 lg:gap-8 xl:gap-0 flex justify-center items-center h-full py-8">
                    <Button variant="primary" to="/contact">
                        Get In Contact
                    </Button>
                </div>
            </section>

            <TestimonialSlider />
        </section>
    );
}
