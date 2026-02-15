import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { contentService } from '../data/contentService';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [content, setContent] = useState(null);
    const [type, setType] = useState('blogs');

    useEffect(() => {
        // Determine type based on path
        let currentType = 'blogs';
        if (location.pathname.includes('/articles')) currentType = 'articles';
        else if (location.pathname.includes('/research')) currentType = 'research';

        setType(currentType);

        const foundContent = contentService.getById(currentType, id);
        if (foundContent) {
            setContent(foundContent);
            document.title = `${foundContent.title} | Portfolio`;
        } else {
            navigate(`/${currentType}`);
        }
    }, [id, navigate, location]);

    if (!content) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-8 text-center">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                    {content.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {content.title}
                </h1>
                <div className="flex items-center justify-center text-gray-600 space-x-4">
                    <span>By {content.author}</span>
                    <span>•</span>
                    <time dateTime={content.date}>{content.date}</time>
                </div>
            </div>

            <div className="w-full h-64 md:h-96 mb-10 overflow-hidden rounded-xl shadow-lg">
                <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="prose prose-lg max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: content.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {content.keywords.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            #{keyword}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={() => navigate(`/${type}`)}
                className="mt-8 px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
            >
                Back to {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
        </article>
    );
};

export default BlogDetail;
