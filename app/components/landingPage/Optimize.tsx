import React from "react";

export default function Optimize() {
    return (
      <section className="bg-[#0E3B50] text-white py-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            So, Do You Need Optimising?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border-2 border-white text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#0E3B50] transition-all"
          >
            CONTACT US <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    );
  }
  