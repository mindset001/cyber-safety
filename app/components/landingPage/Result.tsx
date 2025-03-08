"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const items = [
  { title: "Professional Development", content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", },
  { title: "Business Consultant", content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",},
  { title: "Project Manager", content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", },
  { title: "Travel Management",content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", },
  {
    title: "Meetings & Conference Planners",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
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
              <p className="mt-2 text-gray-600">{items[selectedIndex].content}</p>
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
