'use client'

import React, { useState } from 'react';

export default function EditBlog() {
  const [title, setTitle] = useState('Introduction to Cyber Security');
  const [status, setStatus] = useState('Published');

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      {/* Left Section: Form */}
      <div className="w-full md:w-2/3">
        <h3 className="text-lg font-bold mb-4">Edit Blog</h3>
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded mt-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block text-gray-700 mt-4">Status</label>
        <select
          className="w-full p-2 border rounded mt-1"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
          <option value="Archived">Archived</option>
        </select>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>

      {/* Right Section: Blog Preview */}
      <div className="w-full md:w-1/3 border p-4 rounded shadow-md relative">
        <button className="absolute top-2 right-2 text-gray-500">✖</button>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-gray-700">Status: {status}</p>
      </div>
    </div>
  );
}
