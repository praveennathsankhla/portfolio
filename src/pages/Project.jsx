import React from 'react';
import ProjectBox from '../components/ProjectBox';

const Project = () => {
    return (
        <div className='max-w-5xl  flex-row flex items-start'>
            <ProjectBox project={{
                title: "Arya",
                year: "2025",
                description: "Arya is a smart AI assistant designed to help users learn, code, and solve problems efficiently. It provides clear explanations, programming support, and creative assistance in simple language. Arya focuses on productivity, understanding, and practical problem-solving, acting as a reliable digital companion for students and developers.",
                tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenAI API","Gemini API","Deepseek API"]
                , link: "https://aryaai.dev"
            }} />
            <ProjectBox project={{
                title: "Arya ",
                year: "2025",
                description: "Arya is a smart AI assistant designed to help users learn, code, and solve problems efficiently. It provides clear explanations, programming support, and creative assistance in simple language. Arya focuses on productivity, understanding, and practical problem-solving, acting as a reliable digital companion for students and developers.",
                tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenAI API","Gemini API","Deepseek API"]
                , link: "https://aryaai.dev"
            }} />
        </div>
    );
}

export default Project;
