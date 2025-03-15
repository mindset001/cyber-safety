"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import New3 from '../../../public/assets/business.jpg';

const carouselItems = [
  {
    title: "Moshood Shittu",
    role: "Frontend Engineer",
    description: "Moshood is a frontend engineer with a passion for building beautiful and functional user interfaces.",

    image: New3,
  },
  {
    title: "Saka Hakeem",
    role: "Frontend Engineer",
    description: "Moshood is a frontend engineer with a passion for building beautiful and functional user interfaces.",

    image: New3,
  },
  {
    title: "Moshood Shittu",
    role: "Frontend Engineer",
    description: "Moshood is a frontend engineer with a passion for building beautiful and functional user interfaces.",

    image: New3,
  },
  {
    title: "Engaging, Hands-On Training",
    description: "People learn best by doing, not by sitting through dull PowerPoints",
    image: New3,
  },
  {
    title: "Moshood Shittu",
    role: "Frontend Engineer",
    description: "Moshood is a frontend engineer with a passion for building beautiful and functional user interfaces.",

    image: New3,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default: Desktop (3 items)

  // Detect screen size and update items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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
              className="w-full sm:w-1/2 lg:w-1/3 group p-2 bg-white text-black rounded-xl shadow-lg "
            >
              <div className="flex flex-col md:flex-row items-center  gap-4">
              <Image
                  src={item.image}
                  alt="carousel image"
                  width={300}
                  height={200}
                  className=" mt-4 w-40 h-40 object-cover rounded-full shadow-lg"
                />
             <div>
             <h3 className="text-xl font-semibold">{item.title}</h3>
             <p className="mt-2 text-black">{item.role}</p>
             </div>
              </div>
              {item.image && (
               
                <p className="hidden group-hover:block mt-2 text-black">{item.description}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
