import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <div className="bg-white p-8 rounded-xl shadow-sm border space-y-6 text-gray-700 leading-relaxed">
                <p>
                    <strong>Hi, I'm Praveen.</strong> at just 19 years old, I am a passionate Full-Stack Developer and creative thinker dedicated to building digital experiences that truly matter. My journey in technology is fueled by a relentless curiosity and a drive to turn complex problems into elegant, user-friendly solutions.
                </p>
                <p>
                    Starting young has given me a unique perspective on the rapidly evolving tech landscape. I specialize in building responsive, accessible, and performant web applications using modern tools like React, Node.js, and Tailwind CSS. For me, code isn't just about syntax; it's about creating value and making an impact.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-6">My Mission</h2>
                <p>
                    To create software that empowers users and enhances their daily lives. I believe in the power of code to drive innovation and positive change. Whether it's a personal portfolio, a complex web application, or a simple tool, I strive to deliver excellence in every line of code I write.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-6">What I Do</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Full-Stack Development:</strong> Building robust end-to-end applications.</li>
                    <li><strong>UI/UX Design:</strong> Crafting intuitive and beautiful interfaces.</li>
                    <li><strong>Performance Optimization:</strong> Ensuring applications run smoothly and fast.</li>
                    <li><strong>Continuous Learning:</strong> Staying ahead of the curve with the latest tech trends.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
