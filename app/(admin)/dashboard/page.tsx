'use client';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiSearch, FiUser } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';


const data = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 40 },
    { name: 'Mar', value: 35 },
    { name: 'Apr', value: 50 },
    { name: 'May', value: 45 },
  ];

function Home() {
  return (
    <div className="flex-1 flex flex-col">
   
    {/* Content */}
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Stats */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold">All</h3>
        <p className="text-2xl">7</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold">Archived</h3>
        <p className="text-2xl">1</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold">Pending</h3>
        <p className="text-2xl">3</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold">Drafts</h3>
        <p className="text-2xl">3</p>
      </div>
    </div>
    
    {/* Recent & Graph */}
    <div className="p-6 grid grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">Recent</h3>
        <ul className="space-y-2">
          <li className="p-2 border rounded">Recent Item 1</li>
          <li className="p-2 border rounded">Recent Item 2</li>
          <li className="p-2 border rounded">Recent Item 3</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-bold mb-4">Performance</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  )
}

export default Home