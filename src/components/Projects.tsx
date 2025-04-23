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
            bgcolor: 'from-blue-400 to-indigo-600',
            banner: '/p-l-2_t8WTny6iw-unsplash.jpg' // Corrected path for AI chatbot image
        },
        {
            title: 'eBOOK Platform',
            description: 'Book reading/sharing website enabling users to discover, read, and share their favorite books.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            link: 'https://github.com/paperbukit/eBOOK',
            bgcolor: 'from-amber-400 to-orange-600',
            banner: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' // Existing banner image for eBOOK
        },
        {
            title: 'Cricket Score Predictor',
            description: 'Machine learning-based prediction model with a custom UI for forecasting cricket match scores.',
            tags: ['Python', 'Machine Learning', 'Flask', 'Bootstrap'],
            link: 'https://github.com/paperbukit/for-college/tree/main/python/cricket_score_prediction',
            bgcolor: 'from-emerald-400 to-teal-600',
            banner: '/zoshua-colah-UvGtaCC1eVs-unsplash.jpg' // Corrected path for Cricket Score Predictor image
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

    // Project icons based on technologies
    const getProjectIcon = (index: number) => {
        switch (index) {
            case 0:
                return (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                );
            case 1:
                return (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case 2:
                return (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                );
        }
    };

    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-40 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-20 left-0 w-72 h-72 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 inline-block mx-auto">
                        Featured Projects
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card overflow-hidden group h-full flex flex-col"
                            variants={itemVariants}
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => setHoveredProject(null)}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.bgcolor} p-6 flex items-center justify-center text-white relative overflow-hidden`}>
                                <div className="absolute inset-0 w-full h-full">
                                    <img src={project.banner} alt={`${project.title} banner`} className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -top-10 -right-10"></div>
                                <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full -bottom-10 -left-10"></div>
                                {getProjectIcon(index)}
                                
                                <motion.div 
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a href={project.link} className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                        View Project
                                    </a>
                                </motion.div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary inline-flex items-center group"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span className="relative z-10">More Projects on GitHub</span>
                            
                            {/* Highlight effect on hover */}
                            <span className="absolute inset-0 translate-y-1 translate-x-1 bg-blue-700 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-200 rounded-lg"></span>
                            <span className="absolute inset-0 bg-blue-600 group-hover:bg-blue-500 transition-colors duration-200 rounded-lg"></span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;