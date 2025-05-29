import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Slider = [
  {
    quote: "This platform completely changed the way we work. It's fast, intuitive, and reliable.",
    author: "Jane Doe",
    role: "Product Manager at TechCorp"
  },
  {
    quote: "Exceptional service and user-friendly UI. Our team's productivity skyrocketed.",
    author: "John Smith",
    role: "CTO at StartupX"
  },
  {
    quote: "The best decision we ever made was switching to this solution. Highly recommended!",
    author: "Emily Johnson",
    role: "CEO at Creatives Inc."
  }
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center py-12 px-4">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="px-6"
          >
            <p className="text-lg md:text-xl text-gray-700 italic mb-4">
              “{testimonials[index].quote}”
            </p>
            <h3 className="font-semibold text-indigo-600">{testimonials[index].author}</h3>
            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prevSlide} className="p-2 rounded-full hover:bg-indigo-100">
            <ArrowLeft className="h-5 w-5 text-indigo-500" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={nextSlide} className="p-2 rounded-full hover:bg-indigo-100">
            <ArrowRight className="h-5 w-5 text-indigo-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
