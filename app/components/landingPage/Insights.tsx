import React from "react";

import Image from 'next/image';
import New from '../../../public/assets/new.jpg'
import New2 from '../../../public/assets/two.jpg'
import New3 from '../../../public/assets/business.jpg'

export default function Insights() {
  return (
    <section className="max-w-6xl  py-16 ">
      <div className="text-center">
        <h3 className="text-[#16B7D9] font-semibold">News</h3>
        <h2 className="text-4xl font-bold mt-2">Insights</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {/* Main Article */}
        <div className="herobg2 relative col-span-2">
          <div className="absolute bottom-0 left-20  bg-opacity-50 text-white p-6 rounded-b-lg w-full">
            <p className="text-sm">May 12, 2024</p>
            <h3 className="text-xl font-bold">Meetings & Conference Planners</h3>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        {/* Smaller Articles */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <Image src={New2}alt="Travel" width={150} height={100} className="rounded-lg w-[150px] h-[150px]" />
            <div>
              <p className="text-sm text-gray-500">May 12, 2024</p>
              <h3 className="text-lg font-bold">Travel Management</h3>
              <p className="text-sm">Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src={New3} alt="Consulting" width={150} height={100} className="rounded-lg w-[150px] h-[150px]" />
            <div>
              <p className="text-sm text-gray-500">May 12, 2024</p>
              <h3 className="text-lg font-bold">Business Consultant</h3>
              <p className="text-sm">Lorem Ipsum is simply dummy text of the printing industry.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-6 gap-3">
        <button className="p-2 bg-gray-200 rounded-full">⬅</button>
        <button className="p-2 bg-black text-white rounded-full">➡</button>
      </div>
    </section>
  );
}
