import React from "react";
import Carousel from "./Carousel";

export default function Solutions() {
  return (
    <main className="px-10 md:px-0 flex flex-col items-center justify-center min-h-screen bg-[#14364d] from-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">Why Choose Cyber Safety Alliance?</h1>
      <p className="md:w-[60%]  text-center">Cyber threats are evolving—so should your people. Build a cyber-aware culture with Cyber Safety Alliance!</p>
      <Carousel />
    </main>
  );
}
