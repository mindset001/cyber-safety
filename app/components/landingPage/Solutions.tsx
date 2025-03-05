import React from "react";
import Carousel from "./Carousel";

export default function Solutions() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-6">Solutions</h1>
      <p className="w-[60%]  text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui velit sint at et est laborum consectetur laudantium facilis vero fuga sed magni sapiente, neque illo earum voluptatem nihil cumque fugit explicabo doloribus! Aperiam similique fugit dolores aut sequi repellendus earum, deleniti pariatur aspernatur maxime eligendi est, exercitationem voluptatem sit expedita.</p>
      <Carousel />
    </main>
  );
}
