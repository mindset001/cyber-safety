"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const items = [
  {
    title: "Human Risk Management Platform ",
    description: 'Through our integrated platform, we offer a full suite of tools to manage and reduce human-related cyber risks. This includes:'
    ,
    content: [
      "Phishing simulations",
      "Automated training & awareness campaigns",
      "Real-time threat reporting plugins",
      "Behavioral risk scoring",
      "Incident response workflows",
      "Detailed analytics and benchmarking"
    ]
  },
  {
    title: "Cyber Policy Review",
    description: '',
    content: [
      "Outdated or unclear cyber policies create gaps in both compliance and behavior. We review, update, and align your existing policies with best practices and real-world application. Whether it’s acceptable use, remote work, or breach response and we make sure your policies are usable, understood, and effective at every level. ",
   
    ]
  },
  {
    title: "Tabletop Exercises (In-a-Box Simulations)",
    description: '',
    content: [
      "We deliver ready-to-run tabletop exercises that simulate real-life cyber incidents from phishing breaches to ransomware and insider threats. These guided sessions help leadership and operational teams test their response, improve coordination, and gain confidence in their cyber preparedness. Realistic. Practical. No surprises when it counts.",
   
    ]
  },
    {
    title: "Cybersecurity Training (Virtual & In-Person)",
    description: '',
    content: [
      "Our flexible training programs meet your team where they are online or on-site, entry-level or executive. Covering everything from basic awareness to role-specific responsibilities, our sessions are designed to engage, educate, and embed secure behavior. It’s not just training it’s a long-term investment in culture.",
   
    ]
  }

];

export default function ResultsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Default active item

  return (
    <section className="max-w-6xl mx-auto px-6 py-12  gap-10 mt-10">
       <h3 className="text-[#16B7D9] font-semibold text-center">What We Do</h3>
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        {/* Left Side: List of Categories */}
      <div className="flex-1">
       
     

       <div className="mt-6 space-y-4">
        <p>At CSAlliance, we help organizations reduce cybersecurity risks by focusing on the human element. From building cyber-aware cultures to strengthening behavior, our services empower people to become the strongest link in your security chain not the weakest.
Our services include:
        </p>
         {items.map((item, index) => (
           <div
             key={index}
             className={`cursor-pointer border-b pb-2 ${
               selectedIndex === index ? "font-bold text-black" : "text-gray-800"
             }`}
             onClick={() => setSelectedIndex(index)}
           >
             {item.title}
             
           </div>
         ))}
       </div>

       {/* Active Content Display */}
      
     </div>

     {/* Right Side: Image */}
     <div className=" lg:block flex-1">
     <div className="">
         {items[selectedIndex].content && (
           <div className="p-10 bg-gray-100 rounded-lg">
             <h3 className="text-lg font-bold flex items-center">
               {items[selectedIndex].title}
               <FaArrowUpRightFromSquare className="ml-2" />
             </h3>
             <p className="font-[300] text-[14px]">{items[selectedIndex].description}</p>
             <ul className="mt-2 text-gray-600 list-disc list-inside">
               {items[selectedIndex].content.map((point, i) => (
                 <li key={i}>{point}</li>
               ))}
             </ul>
           </div>
         )}
       </div>
     </div>
      </div>
    </section>
  );
}
