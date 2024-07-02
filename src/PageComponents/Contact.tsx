import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Button from '../CustomComponents/buttons';

export default function Contact() {
  return (
    <section className="bg-white dark:bg-dark-gray py-16">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">
          Have a question about Holly's artwork? Interested in purchasing a piece or commissioning custom art? Get in touch with us!
        </p>
        <div className="flex flex-col justify-center items-center mb-8 space-y-4">
          <div className="flex items-center text-gray-900 dark:text-white">
            <FaEnvelope className="mr-2" />
            <a href="mailto:holly.hipwell@hotmail.com" className="hover:underline">holly.hipwell@hotmail.com</a>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-8 flex flex-col items-center"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="How can we help you?"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Please provide details..."
              required
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
            <Button variant="primary" type="submit" className="w-full sm:w-auto text-center">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}