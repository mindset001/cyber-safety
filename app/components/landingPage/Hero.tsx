import Navbar from '@/app/Navbar/page'
import React from 'react'
import Img from '../../../public/assets/anthill.jpg'

function Hero() {
  return (
    <main>
         <Navbar/>
         <section className="herobg backdrop-blur-lg h-screen flex items-center justify-center text-center text-[#fff] bg-cover bg-center">
      {/* <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 "></div> */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#fff] ">We Maximize Distinct <br />Offerings Quickly & Efficiently.</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#fff]">
          We Maximize really encapsulates our phenomenal success in our core service delivery of volume recruitment marketing.
        </p>
      </div>
    </section>
    </main>
  )
}

export default Hero