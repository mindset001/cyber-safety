'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { message } from 'antd';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdkekaor");
  if (state.succeeded) {
      return <p>Thanks for Cyber Safety Alliance, One of our Personnels will reach out to you.</p>;
      // message.success('Thanks for joining!'); 
  }
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
        <form onSubmit={handleSubmit} className="space-y-4 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" id='name' name='name' placeholder="Name" className="border-b border-gray-300 p-2 focus:outline-none" />
            <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
            <input type="text" id='job-title' name='job-title' placeholder="Job Title" className="border-b border-gray-300 p-2 focus:outline-none" />
            <ValidationError 
        prefix="Job-tiltle" 
        field="Job-tiltle"
        errors={state.errors}
      />
          </div>
          <input type="text" placeholder="Company"name='company' id='company' className="border-b border-gray-300 p-2 w-full focus:outline-none" />
          <ValidationError 
        prefix="Company" 
        field="company"
        errors={state.errors}
      />
          <div className="grid grid-cols-2 gap-4">
            <input type="email"  id="email" name='email' placeholder="Email" className="border-b border-gray-300 p-2 focus:outline-none" />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <input type="text" id='phone' name='phone-number' placeholder="Phone" className="border-b border-gray-300 p-2 focus:outline-none" />
            <ValidationError 
       prefix='Phone'
        field="phone"
        errors={state.errors}
      />
          </div>
          <textarea placeholder="A summary of what you'd like to discuss:"  id='message' name='message' className="border border-gray-300 p-2 w-full h-24 focus:outline-none"></textarea>
          <button className="bg-[#0a486b] cursor-pointer text-white px-6 py-3 mt-4"  type="submit" disabled={state.submitting}>SEND</button>
        </form>
      </div>
    );
  }
