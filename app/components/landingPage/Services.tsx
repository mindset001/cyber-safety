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
        At Cyber Safety Alliance, 
We believe the industry needs to move away from a reactive mindset and embrace a proactive, people-first approach. Our mission is to make cybersecurity something that is understood, lived, and practiced by everyone not just the IT team. That’s why our programs are hands-on, engaging, and grounded in real-world situations. Whether it's defending against phishing, social engineering, insider threats, or accidental data exposure, we prepare people to act with awareness and confidence.


        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#14364d] p-8 rounded-lg text-white">
        <div className="group flex flex-col items-center">
          <FaRulerCombined className="text-5xl" />
          <p className="mt-3 font-semibold">Measure</p>
          < p className='hidden group-hover:block text-[12px]'>We start by running simulations, such as phishing exercises, to gauge your team’s current cybersecurity awareness and response to threats. These simulations deliver a clear baseline of your organization’s human risk profile, showing how employees handle potential risks in realistic scenarios.
          </p>
        </div>
        <div className="group flex flex-col items-center border-l border-white px-6">
          <FaChartPie className="text-5xl" />
          <p className="mt-3 font-semibold">Analyse</p>
          <p className='hidden group-hover:block text-[12px]'>Next, we dive into the data from these simulations to uncover patterns, vulnerabilities, and areas where your team might be exposed to cyber threats. This step pinpoints specific behaviors or knowledge gaps, ensuring our recommendations are precise and tailored to your needs.
          </p>
        </div>
        <div className="group flex flex-col items-center border-l border-white px-6">
          <FaHandsHelping className="text-5xl" />
          <p className="mt-3 font-semibold">Optimise</p>
          <p className='hidden group-hover:block text-[12px]'>Using these insights, we collaborate with you to refine your cybersecurity training and policies. This could mean delivering custom interactive workshops, updating protocols, or introducing new security tools—all designed to tackle the risks we’ve identified and drive meaningful habit change.
          </p>
        </div>
        <div className=" group flex flex-col items-center border-l border-white px-6">
          <FaClock className="text-5xl" />
          <p className="mt-3 font-semibold">Repeat</p>
          <p className='hidden group-hover:block text-[12px]'>Cybersecurity isn’t a one-off task. We keep the cycle going—measuring, analyzing, and optimizing—to ensure your team stays ahead of evolving threats and builds lasting cybersecurity habits. This iterative process keeps your organization adaptable and resilient in an ever-changing digital world.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
