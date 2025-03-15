'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import New3 from '../../../public/assets/business.jpg';
import { section } from 'framer-motion/client';
import Navbar from '@/app/Nav2/page';
import Footer from '@/app/components/Footer';
import ContactForm from '@/app/components/landingPage/ContactForm';

const blogPosts = [
  { 
    id: '1', 
    title: 'Understanding React Server Components', 
    content: 'React Server Components (RSC) allow developers to render components on the server, reducing client-side JavaScript bundle size and improving performance...',
    image: New3 
  },
  { 
    id: '2', 
    title: 'Mastering TypeScript with Next.js', 
    content: 'TypeScript enhances Next.js applications by providing static type-checking and improved developer experience...',
    image: New3 
  },
  { 
    id: '3', 
    title: 'Performance Optimization in Next.js', 
    content: 'To optimize Next.js performance, consider strategies like static generation (SSG), image optimization, and lazy loading...',
    image: New3
  },
];

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">404 - Blog Not Found</h1>
        <p className="mt-4">The blog you are looking for does not exist.</p>
        <Link href="/blog" className="mt-6 text-blue-500 inline-block">← Go Back to Blogs</Link>
      </div>
    );
  }

  return (
    <section>
      <Navbar/>
      <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full rounded-lg" />
      <p className="text-gray-700 mt-4 leading-relaxed">{blog.content}</p>
      <Link href="/blog" className="mt-6 inline-block text-blue-500">← Back to Blogs</Link>
    </div>
    <ContactForm/>
    <Footer/>
    </section>
  );
};

export default BlogPage;
