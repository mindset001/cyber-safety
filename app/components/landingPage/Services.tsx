'use client';
import React from 'react';
import { FaRulerCombined, FaChartPie, FaHandsHelping, FaClock } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="md:w-[55%] mx-auto px-4">
        <h3 className="text-[#19b6d7] font-semibold text-[40px]">Our Mission</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Everything We Do Is Driven By Our Mantra</h2>
        <p className="text-gray-600 mt-4 text-lg">
        To redefine cybersecurity awareness by making it interactive, engaging, and human-centered. We empower businesses, educational institutions, and communities with immersive, compliance-focused training solutions that turn cybersecurity from a technical challenge into an everyday skill.

        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#14364d] p-8 rounded-lg text-white">
        <div className="flex flex-col items-center">
          <FaRulerCombined className="text-5xl" />
          <p className="mt-3 font-semibold">Measure</p>
        </div>
        <div className="flex flex-col items-center border-l border-white px-6">
          <FaChartPie className="text-5xl" />
          <p className="mt-3 font-semibold">Analyse</p>
        </div>
        <div className="flex flex-col items-center border-l border-white px-6">
          <FaHandsHelping className="text-5xl" />
          <p className="mt-3 font-semibold">Optimise</p>
        </div>
        <div className="flex flex-col items-center border-l border-white px-6">
          <FaClock className="text-5xl" />
          <p className="mt-3 font-semibold">Repeat</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
