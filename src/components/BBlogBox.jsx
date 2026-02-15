import React from 'react';
import { Link } from 'react-router-dom';

const BBlogBox = ({ blogs }) => {
  return (
    <Link to={`/blogs/${blogs.id}`} className="block">
      <div className="cursor-pointer bg-white rounded-xl shadow-sm border w-full h-full hover:shadow-md transition flex flex-col overflow-hidden">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={blogs.image}
            alt={blogs.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              {blogs.category}
            </span>
            <span className="text-xs text-gray-500">{blogs.date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blogs.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{blogs.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-medium text-gray-700">By {blogs.author}</span>
            <span className="text-blue-600 text-sm font-medium hover:underline">Read More →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BBlogBox;
