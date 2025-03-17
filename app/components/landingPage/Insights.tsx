import React from "react";

import Image from 'next/image';
import New from '../../../public/assets/new.jpg'
import New2 from '../../../public/assets/two.jpg'
import New3 from '../../../public/assets/business.jpg'
import { Button } from "antd";
import Link from "next/link";

export default function Insights() {
  return (
    <section className="max-w-6xl  py-16 ">
      <div className="text-center">
        <h3 className="text-[#16B7D9] font-semibold">News</h3>
        <h2 className="text-4xl font-bold mt-2">Blogs</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-4 md:px-16">
        {/* Main Article */}
        <div className="hidden md:block herobg2 relative col-span-2">
          <div className="absolute bottom-0 left-20  bg-opacity-50 text-white p-6 rounded-b-lg w-full">
            <p className="text-sm">May 12, 2024</p>
            <h3 className="text-xl font-bold">Meetings & Conference Planners</h3>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        {/* Smaller Articles */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <Image src={New2} alt="Travel" width={150} height={100} className="rounded-lg w-[150px] h-[150px]" />
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

      <div className="flex justify-end items-right mt-6">
        <Link href='/blog'>      <button className="cursor-pointer mt-6 px-6 py-3 bg-[#0a4b6b] text-white font-semibold rounded-lg flex items-center text-center gap-2">All Blogs</button></Link>
      </div>

    </section>
  );
}
