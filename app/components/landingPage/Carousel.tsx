"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import New3 from '../../../public/assets/business.jpg';
import New2 from '../../../public/assets/human.jpg';
import New4 from '../../../public/assets/hands.jpg';
import New5 from '../../../public/assets/mda.jpg';

const carouselItems = [
  {
    title: "Human-Centric Approach",
    description: "Focused on behavior, psychology, and decision-making beyond just technology",
    image: New2,
  },
  {
    title: "Regulatory Compliance Ready",
    description: "Ensure adherence to GDPR, ISO 27001, Cyber Essentials, and NIST.",
    image: New3,
  },
  {
    title: "Proven Risk Reduction Strategies",
    description: "Data-driven insights to measure actual improvements in cyber awareness",
    image: New5,
  },
  {
    title: "Engaging, Hands-On Training",
    description: "People learn best by doing, not by sitting through dull PowerPoints",
    image: New4,
  },
  // {
  //   title: "Performance & Growth",
  //   description: "Lorem Ipsum is simply dummy text of the printing industry.",
  //   image: New3,
  // },
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
              className="w-full sm:w-1/2 lg:w-1/3 group p-6 bg-white text-black rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-black">{item.description}</p>
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
