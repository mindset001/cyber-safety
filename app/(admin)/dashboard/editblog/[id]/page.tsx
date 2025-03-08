'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from '@/public/assets/Asset 4@72x-8.png';
import Image, { StaticImageData } from 'next/image';

type BlogStatus = 'Published' | 'Draft' | 'Archived';

const blogs = [
  { id: 1, title: 'Blog 1', status: 'Published', content: 'Content 1', image: Logo },
  { id: 2, title: 'Blog 2', status: 'Draft', content: 'Content 2', image: null },
  { id: 3, title: 'Blog 3', status: 'Archived', content: 'Content 3', image: null },
  { id: 4, title: 'Blog 4', status: 'Published', content: 'Content 4', image: null },
];

export default function EditBlog() {
  const router = useRouter();
  const { id } = useParams();
  const blogId = parseInt(id as string, 10);
  const [blog, setBlog] = useState(() => blogs.find((b) => b.id === blogId) || null);

  useEffect(() => {
    if (!blog) router.push('/');
  }, [blog, router]);

  if (!blog) return <p>Loading...</p>;

  const [title, setTitle] = useState(blog.title);
  const [status, setStatus] = useState(blog.status);
  const [content, setContent] = useState(blog.content || '');
  const [image, setImage] = useState<StaticImageData | string | null>(blog.image || null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log('Updated Blog:', { id: blog.id, title, status, content, image });
    router.push('/');
  };

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Blog</h2>

      <label className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
  <label className="block text-sm font-medium text-gray-700">Image</label>
      {image && <Image src={image} alt="Blog Preview" className="w-40 h-40  object-cover mb-4 rounded-md" />}
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4 border p-2" />
      <label className="block text-sm font-medium text-gray-700">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as BlogStatus)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      >
        <option value="Published">Published</option>
        <option value="Draft">Draft</option>
        <option value="Archived">Archived</option>
      </select>

      <label className="block text-sm font-medium text-gray-700">Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 h-32"
      />

    
      

      <div className="flex justify-end space-x-4">
        <button onClick={() => router.push('/dashboard/blog')} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </div>
    </div>
  );
}
