import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projectList = [
        {
            title: 'AI Discord Chatbot',
            description: 'A chatbot for Discord servers powered by AI.',
            tags: ['Node.js', 'Discord.js', 'AI'],
            link: 'https://github.com/paperbukit/AI-Discord-Chatbot',
            bgcolor: 'from-gray-400 to-gray-600',
            banner: '\discord_ai_bot_app_logo_icon_d.jpeg',
            date: '2025-01-03'
        },
        {
            title: 'eBOOK Platform',
            description: 'Book reading/sharing website enabling users to discover, read, and share their favorite books.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            link: 'https://github.com/paperbukit/eBOOK',
            bgcolor: 'from-amber-400 to-orange-600',
            banner: '\e-book_tablet_kindle_app_logo_.jpeg',
            date: '2025-04-21'
        },
        {
            title: 'Cricket Score Predictor',
            description: 'Machine learning-based prediction model with a custom UI for forecasting cricket match scores.',
            tags: ['Python', 'Machine Learning', 'Flask', 'Bootstrap'],
            link: 'https://github.com/paperbukit/for-college/tree/main/python/cricket_score_prediction',
            bgcolor: 'from-emerald-400 to-teal-600',
            banner: '\cricket_stadium_app_logo_icon_.jpeg',
            date: '2024-11-13'
        },
        {
            title: 'Elden Ring Checklist',
            description: 'A checklist application for tracking progress in the game ELDENRING.',
            tags: ['React', 'JavaScript', 'CSS'],
            link: 'https://github.com/paperbukit/ELDENRING-CHECKLIST',
            bgcolor: 'from-purple-400 to-indigo-600',
            banner: '\elden_ring_game_breathtaking_d.jpeg',
            date: '2025-06-22'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const recentProjects = projectList
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            Featured Projects
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on recently.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {recentProjects.map((project: { title: string; description: string; tags: string[]; link: string; banner: string; }, index: number) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <img
                                src={project.banner}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag: string, idx: number) => (
                                    <span
                                        key={idx}
                                        className="text-sm bg-gray-200 text-gray-800 py-1 px-2 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                            >
                                View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/all-projects"
                        className="inline-block px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        See All Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;