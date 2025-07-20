import React from 'react';
import { motion } from 'framer-motion';

const AllProjects: React.FC = () => {
    const projectList = [
        {
            title: 'AI Discord Chatbot',
            description: 'A chatbot for Discord servers powered by AI.',
            tags: ['Node.js', 'Discord.js', 'AI'],
            link: 'https://github.com/paperbukit/AI-Discord-Chatbot',
            liveLink: '', // Add your live link here
            banner: '/discord_ai_bot_app_logo_icon_d.jpeg',
            date: '2025-01-03'
        },
        {
            title: 'eBOOK Platform',
            description: 'Book reading/sharing website enabling users to discover, read, and share their favorite books.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            link: 'https://github.com/paperbukit/eBOOK',
            liveLink: 'https://vvce-ebook.netlify.app/', // Add your live link here
            banner: '/e-book_tablet_kindle_app_logo_.jpeg',
            date: '2025-04-21'
        },
        {
            title: 'Cricket Score Predictor',
            description: 'Machine learning-based prediction model with a custom UI for forecasting cricket match scores.',
            tags: ['Python', 'Machine Learning', 'Flask', 'Bootstrap'],
            link: 'https://github.com/paperbukit/for-college/tree/main/python/cricket_score_prediction',
            liveLink: '', // No live link for this project
            banner: '/cricket_stadium_app_logo_icon_.jpeg',
            date: '2024-11-13'
        },
        {
            title: 'Elden Ring Checklist',
            description: 'A checklist application for tracking progress in the game ELDENRING.',
            tags: ['React', 'JavaScript', 'CSS'],
            link: 'https://github.com/paperbukit/ELDENRING-CHECKLIST',
            liveLink: 'https://eldenringchecklist.netlify.app/',
            banner: '/elden_ring_game_breathtaking_d.jpeg',
            date: '2025-06-22'
        },
        {
            title: 'AI PDF Chatbot',
            description: 'A chatbot for interacting with PDF documents using AI.',
            tags: ['Python', 'Streamlit', 'LangChain', 'Groq Llama 3', 'AI'],
            link: 'https://github.com/paperbukit/pdf-chatbot',
            liveLink: 'https://paperbukit-pdf-chatbot.streamlit.app/',
            banner: '/talking_robot_app_logo_icon_di.jpeg',
            date: '2025-06-24'
        },
        {
            title: 'Streakify',
            description: 'A modern productivity app combining tasks, Pomodoro, streak tracking, and gamified XP system. Offline-first and mobile-optimized.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PWA'],
            link: 'https://github.com/paperbukit/streakify',
            liveLink: 'https://streakify-paperbukit.netlify.app/',
            banner: '/streakify_logo_banner.jpeg',
            date: '2025-07-20'
        }
    ];

    const sortedProjects = projectList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section className="min-h-screen py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">All Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {sortedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col h-full bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={project.banner}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-semibold mt-4 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm bg-gray-200 text-gray-800 py-1 px-2 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 mt-auto w-fit self-start"
                                >
                                    View on GitHub
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-auto w-fit self-start"
                                    >
                                        View Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
