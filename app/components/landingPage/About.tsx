"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
      {/* Left Content */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        {/* <h4 className="text-[#19b6d7] font-semibold text-lg">Our Story</h4> */}
        <h2 className="text-4xl font-bold text-gray-900 mt-2">About Us</h2>
        <p className="text-gray-600 mt-4">
        Cyber Safety Alliance (CSA) is a Human Risk Management and Cyber Awareness Training firm dedicated to helping organizations strengthen their people-focused security strategies. We specialize in interactive education, behavior-based risk reduction, and compliance-aligned training that empowers individuals to play an active role in cyber defense.


        </p>
        <p className="text-gray-600 mt-2">
    Our journey began with a simple but urgent observation: too many organizations only take cybersecurity seriously after something goes wrong. Time and again, we saw breaches traced back not to broken firewalls or outdated systems, but to overlooked human behavior a missed warning sign, a clicked link, a moment of distraction.


        </p>
        {/* Animated Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-6 px-6 py-3 bg-[#0a4b6b] text-white font-semibold rounded-lg flex items-center gap-2"
        >
        <Link href='#contact-us'> Contact Us</Link>
        </motion.button>
      </motion.div>

      {/* Right Images */}
      <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
        {/* Background Decorative Shape */}
        <motion.div 
          className="absolute -top-6 right-50 w-42 h-42  border-30 border-[#0a4b6b] rounded-full opacity-30"
          initial={{ scale: 0, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>

        {/* Image 1 (Lower Image) */}
        <motion.img
          src="https://i.pinimg.com/474x/f1/37/b1/f137b1914b1b9358e9ff9c0a76b852f3.jpg"
          alt="Team working"
          className="w-48 h-48 object-cover rounded-lg shadow-lg mt-20 z-1 border-4 border-white"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Image 2 (Upper Image) */}
        <motion.img
          src="https://i.pinimg.com/474x/89/ea/72/89ea72b0af4cb22f51ed6e491bd3fe91.jpg"
          alt="Happy employee"
          className="w-48 h-48 object-cover rounded-lg shadow-lg absolute top-0 right-10 border-4 border-white"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default About;
