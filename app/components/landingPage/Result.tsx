"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const items = [
  {
    title: "Cyber Awareness & Compliance Training",
    content: [
      "Engaging training programs covering Phishing awareness, Data privacy & protection, Insider threats,Secure remote work best practices.",
      "Aligned with regulatory standards such as GDPR, ISO 27001, Cyber Essentials, and NIST.",
      "Delivered via Gamified e-learning, In-person workshops, Immersive simulations & experiential training."
    ]
  },
  {
    title: "Behavioral Risk Assessment & Insider Threat Mitigation",
    content: [
      "Human Risk Score™ – Measure cybersecurity awareness levels and identify risk-prone behaviors.",
      "Insider Threat Monitoring – Proactively detect and prevent security risks from within.",
      "Data-Driven Risk Reports – Gain insights into employee behavior and tailor training accordingly."
    ]
  },
  {
    title: "Phishing & Social Engineering Simulations",
    content: [
      "Real-world phishing & scam simulations to test employee response in a safe, controlled environment.",
      "Track progress & behavior patterns to measure cyber awareness improvement.",
      "Immediate feedback & corrective training for users who fail simulated attacks."
    ]
  },
  {
    title: "Gamified Learning & Experiential Cyber Training",
    content: [
      "Board Games & Escape Room Challenges – Making cybersecurity training engaging and interactive.",
      "QR Code-Based Mobile Challenges – Learn on the go with quick, real-world cyber scenarios.",
      "Cyber Hygiene Habit Builder – Reinforce safe digital behaviors through daily microlearning exercises."
    ]
  },
  {
    title: "Incident Response & Crisis Preparedness",
    content: [
      "Rapid Response Playbooks – Step-by-step guides for handling phishing, ransomware, and insider threats.",
      " Role-based Security Drills & Crisis Simulations – Realistic scenarios for executives, HR teams, and IT departments.",
      "Policy Development & Compliance Guidance – Create and implement cybersecurity policies that align with regulations."
    ]
  }
];

export default function ResultsSection() {
  const [selectedIndex, setSelectedIndex] = useState(4); // Default active item

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 lg:flex gap-10">
      {/* Left Side: List of Categories */}
      <div className="flex-1">
        <h3 className="text-[#16B7D9] font-semibold">Our Approach</h3>
        <h2 className="text-4xl font-bold">Results</h2>
        <p className="text-gray-600 mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <div className="mt-6 space-y-4">
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
        <div className="mt-6">
          {items[selectedIndex].content && (
            <div className="p-4 bg-gray-100 rounded-lg">
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

      {/* Right Side: Image */}
      <div className="hidden lg:block flex-1">
        <Image
          src="/assets/business.jpg" // Update to match your image path
          width={600}
          height={400}
          alt="Business meeting"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
