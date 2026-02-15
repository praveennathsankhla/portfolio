import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contentService } from '../data/contentService';

const Research = () => {
    const [research, setResearch] = useState([]);

    useEffect(() => {
        contentService.initialize('research');
        setResearch(contentService.getAll('research'));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Research</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {research.map(item => (
                    <Link to={`/research/${item.id}`} key={item.id} className="block">
                        <div className="cursor-pointer bg-white rounded-xl shadow-sm border w-full h-full hover:shadow-md transition flex flex-col overflow-hidden">
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-800 rounded-full">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{item.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm font-medium text-gray-700">By {item.author}</span>
                                    <span className="text-blue-600 text-sm font-medium hover:underline">Read More →</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Research;
