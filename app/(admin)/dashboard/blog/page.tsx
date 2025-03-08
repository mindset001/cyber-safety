'use client'

import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Menu } from '@headlessui/react';


type BlogStatus = 'Published' | 'Draft' | 'Archived';

const blogs: { id: number; title: string; status: BlogStatus; views: number }[] = [
  { id: 1, title: 'Blog 1', status: 'Published', views: 38 },
  { id: 2, title: 'Blog 2', status: 'Draft', views: 0 },
  { id: 3, title: 'Blog 3', status: 'Archived', views: 42 },
  { id: 4, title: 'Blog 4', status: 'Published', views: 57 },
];

const statusColors = {
  Published: 'bg-green-200 text-green-700',
  Draft: 'bg-yellow-200 text-yellow-700',
  Archived: 'bg-gray-200 text-gray-700',
};

export default function BlogTable() {
  return (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-4">Blogs</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-center">#</th>
              <th className="p-3 text-center">Title</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Views</th>
              <th className="p-3 text-center">Manage</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border text-center ">
                <td className="p-3">{blog.id}</td>
                <td className="p-3">{blog.title}</td>
                <td className={`p-3 rounded-full text-sm ${statusColors[blog.status]}`}>{blog.status}</td>
                <td className="p-3">{blog.views}</td>
                <td className="p-3 relative">
                <Menu as="div" className="relative inline-block text-left">
  <Menu.Button className="p-2 rounded hover:bg-gray-200">
    <FaEllipsisV />
  </Menu.Button>
  <Menu.Items className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
    <Menu.Item>
      {({ active }) => (
        <button className={`p-2 w-full text-left ${active ? 'bg-gray-100' : ''}`}>
          Edit
        </button>
      )}
    </Menu.Item>
    <Menu.Item>
      {({ active }) => (
        <button className={`p-2 w-full text-left text-red-500 ${active ? 'bg-gray-100' : ''}`}>
          Delete
        </button>
      )}
    </Menu.Item>
  </Menu.Items>
</Menu>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
