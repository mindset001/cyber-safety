"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const items = [
  {
    title: "Phishing Simulations",
    description: 'We offer a comprehensive suite of phishing simulations to test and strengthen your team’s ability to recognize and respond to cyber threats. Each simulation delivers immediate feedback and educational resources to drive learning and improve resilience.',
    content: [
      "Email Phishing Simulation*: Realistic email scenarios to assess and enhance vigilance against phishing attempts.",
      "Smishing Simulation*: SMS-based simulations to build awareness of text message scams",
      "Vishing Simulation*: Voice call simulations to prepare your team for phone-based social engineering tactics.",
      "Quishing Simulation*: QR code-based simulations to educate on the dangers of malicious QR codes. ",
      "Callback Simulation*: Scenarios testing responses to callback requests, a subtle yet common phishing technique. "
    ]
  },
  {
    title: "Bespoke Interactive Training",
    description: '',
    content: [
      "Our customized, hands-on training programs are tailored to your organization’s unique needs. Through interactive workshops, gamified experiences, and real-world scenarios, we promote lasting habit change, ensuring your team adopts the behaviors needed to stay secure in a digital world. ",
   
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
        <p>At Cyber Safety Alliance, we specialize in Human Risk Management, empowering your team to reduce cybersecurity risks through targeted education and practical experience. Our services include:
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
             <p className="font-[300] text-[14px]">{item.description}</p>
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
