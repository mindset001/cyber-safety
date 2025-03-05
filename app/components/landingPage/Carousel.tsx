"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import New3 from '../../../public/assets/business.jpg'

// Sample images (replace with actual imports if needed)
const carouselItems = [
  {
    title: "Market & Candidate Research",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    image: New3 
  },
  {
    title: "The Candidate Journey & Experience",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    image: New3 // Replace with your actual image path
  },
  {
    title: "Hiring & Onboarding",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    image: New3 
  },
  {
    title: "HR & Compliance",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    image: New3 
  },
  {
    title: "Performance & Growth",
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    image:  New3 , // Replace with your actual image path
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < carouselItems.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden p-6">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-lg"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 z-10 p-3 bg-gray-800 text-white rounded-full shadow-lg"
      >
        <FaArrowRight />
      </button>

      {/* Carousel Items */}
      <div className="flex gap-6 justify-center">
        <AnimatePresence mode="popLayout">
          {carouselItems.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-1/3 group p-6 bg-black text-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.description}</p>
              {item.image && (
                <Image
                  src={item.image}
                  alt="carousel image"
                  width={300}
                  height={200}
                  className="hidden group-hover:block mt-4 rounded-lg w-full"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
