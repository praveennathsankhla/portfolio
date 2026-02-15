import React, { useState } from 'react';
import BBlogBox from '../components/BBlogBox';
import { blogs } from '../data/blogs';

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Psychology', 'Science', 'Society', 'Thoughts'];

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h1>

            <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map(blog => (
                    <BBlogBox key={blog.id} blogs={blog} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
