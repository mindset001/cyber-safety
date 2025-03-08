"use client"; // Keep this because we use useRouter

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import Logo from '../../../public/assets/Asset 4@72x-8.png';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="h-20 w-20 mx-auto">
         <Link href='/'> <Image src={Logo} alt="Logo" /></Link>
        </div>
        <nav className="mt-6 space-y-4">
          <button onClick={() => router.push('/dashboard')} className="block p-2 text-gray-700 hover:bg-gray-200 rounded w-full text-left">
            Home
          </button>
          <button onClick={() => router.push('/dashboard/blog')} className="block p-2 text-gray-700 hover:bg-gray-200 rounded w-full text-left">
            Blogs
          </button>
          <button onClick={() => router.push('/dashboard/content')} className="block p-2 text-gray-700 hover:bg-gray-200 rounded w-full text-left">
            Contents
          </button>
          <a href="/login" className="block p-2 text-red-500 hover:bg-gray-200 rounded">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full w-1/3">
            <FaSearch className="text-gray-500 mr-2" />
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none flex-1" />
          </div>
          {/* Profile Icon */}
          <FaUserCircle className="text-gray-600 text-3xl cursor-pointer" />
        </header>

        {/* Dynamic Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
