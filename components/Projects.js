'use client'
import React, { useState } from 'react';
import { FlipHorizontal, FlipVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Bike-repaire services Site',
        description: 'The client needed a seamless auto-service booking platform, so I built a responsive app using React, TypeScript, and Tailwind that automated technician assignments and reduced manual coordination, helping the client onboard 40+ users in two weeks — double their initial goal.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
        link: 'https://bikefixup.com/',
    },
    {
        id: 2,
        title: 'Blogging Platform',
        description: 'The client wanted a story platform to engage writers and readers, so I built it with Next.js, TypeScript, and OpenAI’s API for AI-powered storytelling, resulting in a 120% increase in user-generated content and outperforming their engagement target within the first month.',
        tags: ['Nextjs', 'Express', 'D3.js', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        link: 'https://www.blogme.africa',
    },
    {
        id: 3,
        title: 'Amazon PPC management site',
        description: 'The client needed a way to track Amazon ad performance and reduce wasted spend, so I built a real-time dashboard using React, Recharts, and the Amazon Advertising API — enabling users to securely connect their own PPC accounts, visualize campaign metrics, and make informed decisions, which led to an 18% drop in ACOS within two weeks, surpassing the client’s expectations.',
        tags: ['React', 'Supabase', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        link: 'https://www.eventie.africa',
    },
];

const ProjectsSection = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (projectId, direction) => {
        const cardId = `card-${projectId}`;
        setFlippedCards(prev => {
            const currentFlips = prev[cardId] || { horizontal: false, vertical: false };
            return {
                ...prev,
                [cardId]: {
                    ...currentFlips,
                    [direction]: !currentFlips[direction]
                }
            };
        });
    };

    return (
        <section id="projects" className="bg-white">
            <div className="section-container">
                <h2 className="section-title text-center">My Projects</h2>
                <p className="text-black text-center max-w-2xl mx-auto mb-12">
                    Here are some of my recent projects. Each project is unique and solves specific problems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => {
                        const cardId = `card-${project.id}`;
                        const isFlippedH = flippedCards[cardId]?.horizontal || false;
                        const isFlippedV = flippedCards[cardId]?.vertical || false;

                        return (
                            <motion.div
                                key={project.id}
                                className="relative"
                                style={{
                                    transform: `${isFlippedH ? 'scaleX(-1)' : ''} ${isFlippedV ? 'scaleY(-1)' : ''}`,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white rounded-lg">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-red-900 mb-2">{project.title}</h3>
                                        <p className="text-black mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="text-xs bg-blue-900 text-portfolio-lightBlue px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <a
                                                href={project.link}
                                                className="text-red-950 hover:underline font-medium inline-flex items-center"
                                            >
                                                View Project
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </a>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => handleFlip(project.id, 'horizontal')}
                                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                    aria-label="Flip horizontally"
                                                >
                                                    <FlipHorizontal size={16} className="text-gray-500" />
                                                </button>

                                                <button
                                                    onClick={() => handleFlip(project.id, 'vertical')}
                                                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                    aria-label="Flip vertically"
                                                >
                                                    <FlipVertical size={16} className="text-gray-500" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
