import React from 'react';
import { motion } from 'framer-motion';

const Goals: React.FC = () => {
    const goals = [
        {
            title: 'Technical Mastery',
            description: 'Gain advanced proficiency in DSA, System Design and Full Stack Development.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        },
        {
            title: 'Career Growth',
            description: 'Secure a challenging role as a Software Engineer at a product-based tech organization.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: 'Innovation',
            description: 'Build products that solve real-world problems while pushing technological boundaries.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
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

    const timeline = [
        { year: 2025, text: 'Currently pursuing BE in CSE-AIML at Vidyavardhaka College of Engineering' }
    ];

    return (
        <section id="goals" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-40 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-60 h-60 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 inline-block mx-auto">
                        Future Goals (2025)
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        I've set ambitious targets for my professional journey. Here's where I aim to be in the coming years.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="col-span-3"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {goals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    className="card overflow-hidden flex flex-col h-full"
                                    variants={itemVariants}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    <div className="p-8">
                                        <div className="w-14 h-14 mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            {goal.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-800">{goal.title}</h3>
                                        <p className="text-gray-600">{goal.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full opacity-70 transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-50 rounded-full opacity-70 transform -translate-x-20 translate-y-20"></div>
                    
                    <div className="relative">
                        <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
                            Career Timeline
                        </h3>
                        
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
                            
                            {timeline.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="relative mb-12 last:mb-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <div className="flex items-center">
                                        <div className="flex flex-col items-center mr-4 md:mr-8">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm z-10">
                                                {item.year}
                                            </div>
                                            {index < timeline.length - 1 && (
                                                <div className="w-0.5 h-12 bg-blue-200"></div>
                                            )}
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md p-5 ml-2 flex-1 md:ml-0">
                                            <p className="text-gray-700">{item.text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <a 
                        href="mailto:your-email@example.com" 
                        className="inline-flex items-center group relative"
                    >
                        <span className="relative z-10 py-3 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                            Let's Connect and Build Something Amazing
                            <svg className="w-5 h-5 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <span className="absolute inset-0 rounded-full bg-blue-600 opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-300"></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Goals;