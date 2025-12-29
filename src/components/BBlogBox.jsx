import React from 'react';

const BBlogBox = ({blogs}) => {
    return (
        <div className="cursor-pointer bg-white rounded-xl shadow-sm border w-100 h-100 m-4 p-6 hover:shadow-md transition flex  justify-between flex-col items-end">
             <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{blogs.title}</h3>
        
      </div>
      <p className="text-gray-600 mb-4 ">{blogs.description}</p>
      <div className="flex flex-wrap gap-2">
      </div>
      <span className="text-sm text-gray-500">{blogs.year}</span>
        </div>
    );
}

export default BBlogBox;
