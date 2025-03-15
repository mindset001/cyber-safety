'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import New3 from '../../../public/assets/business.jpg';

const blogPosts = [
  { id: 1, title: 'Understanding React Server Components', summary: 'Learn how React Server Components optimize performance and improve scalability.', link: '/blog/react-server-components', image: New3 },
  { id: 2, title: 'Mastering TypeScript with Next.js', summary: 'A guide to using TypeScript effectively in your Next.js projects.', link: '/blog/typescript-nextjs', image: New3 },
  { id: 3, title: 'Performance Optimization in Next.js', summary: 'Improve your Next.js app speed with these optimization techniques.', link: '/blog/nextjs-performance', image: New3 },
  { id: 4, title: 'Cybersecurity Best Practices', summary: 'Keep your applications secure with these cybersecurity best practices.', link: '/blog/cybersecurity', image: New3 },
  { id: 5, title: 'Building Scalable Web Apps', summary: 'Learn how to design and implement scalable web applications.', link: '/blog/scalable-web-apps', image: New3 },
];

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMore = () => {
    setVisibleBlogs((prev) => prev + 2);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Read More Blogs</h1>
      <p className="text-center text-gray-600 mb-6">Stay updated with the latest trends on Cyber Security and Development.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogPosts.slice(0, visibleBlogs).map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md bg-white">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.summary}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-500 mt-3 inline-block">Read More →</Link>
          </div>
        ))}
      </div>

      {visibleBlogs < blogPosts.length && (
        <div className="text-center mt-6">
          <button onClick={loadMore} className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
