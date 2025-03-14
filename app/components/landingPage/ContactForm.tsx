import React from 'react';


export default function ContactForm() {
    return (
      <div className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Take Control of Your Human Cyber Risk Today!
          </h2>
          <p className="text-gray-600">
            Everything starts with a conversation. But there’s other ways to get in touch with us.
          </p>
        </div>
        
        {/* Right Side Form */}
        <form className="space-y-4 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border-b border-gray-300 p-2 focus:outline-none" />
            <input type="text" placeholder="Job Title" className="border-b border-gray-300 p-2 focus:outline-none" />
          </div>
          <input type="text" placeholder="Company" className="border-b border-gray-300 p-2 w-full focus:outline-none" />
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="border-b border-gray-300 p-2 focus:outline-none" />
            <input type="text" placeholder="Phone" className="border-b border-gray-300 p-2 focus:outline-none" />
          </div>
          <textarea placeholder="A summary of what you'd like to discuss:" className="border border-gray-300 p-2 w-full h-24 focus:outline-none"></textarea>
          <button className="bg-[#0a486b] cursor-pointer text-white px-6 py-3 mt-4">SEND</button>
        </form>
      </div>
    );
  }
