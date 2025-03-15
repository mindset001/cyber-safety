import React from 'react'
import Carousel from './TeamCarousel'

function Team() {
  return (
    <main className="py-10 md:px-0 flex flex-col items-center justify-center bg-[#14364d] from-gray-900 to-black text-white">
         <h1 className="text-3xl font-bold my-6">Our Team</h1>
         {/* <p className="md:w-[60%]  text-center">Cyber threats are evolving—so should your people. 🚀 Build a cyber-aware culture with Cyber Safety Alliance!</p> */}
         <Carousel />
       </main>
  )
}

export default Team