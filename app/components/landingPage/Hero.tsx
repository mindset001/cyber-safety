import Navbar from '@/app/Navbar/page'
import React from 'react'
import Img from '../../../public/assets/anthill.jpg'
import { motion } from "framer-motion";
import Link from 'next/link';

function Hero() {
  return (
    <main className='herobg backdrop-blur-lg h-screen'>
         <Navbar/>
         <section className=" h-screen flex items-center justify-center text-center text-[#fff] bg-cover bg-center">
      {/* <div className="absolute inset-0 "></div>
      
      <div className="absolute inset-0 "></div> */}
      <div className="relative z-10 px-4 flex flex-col justify-center items-center space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold text-[#fff] ">Cyber Safety Alliance</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#fff]">
        Building a Safer Digital Future
        </p>
        <button  className="cursor-pointer mt-6 px-6 py-3 bg-[#0a4b6b] text-white font-semibold rounded-lg flex items-center text-center gap-2"> <Link href='#contact-us'> Contact Us</Link></button>
      </div>
    </section>
    </main>
  )
}

export default Hero