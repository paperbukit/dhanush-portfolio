import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importing Next.js Image component
import profilePicture from './pp.jpg'; // Correctly importing the profile picture

const ContactPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul className="space-y-2">
                <li><strong>Email:</strong> <a href="mailto:dhanushhs1@outlook.com" className="text-gray-600 hover:underline">dhanushhs1@outlook.com</a></li>
                <li><strong>Instagram:</strong> <a href="https://instagram.com/paperbukit" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">@paperbukit</a></li>
                <li><strong>Twitter:</strong> <a href="https://x.com/paperbukit" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">x.com/paperbukit</a></li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/8660833055" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">8660833055</a></li>
            </ul>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Close</button>
        </div>
    </div>
);

const Bio: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Example data - would be fetched from Sanity in a real implementation
    const bioData = {
        name: 'Dhanush H S',
        education: 'BE in Computer Science & Engineering (AI & ML)', // Updated education
        college: 'Vidyavardhaka College of Engineering', // Updated college name
        graduationYear: 2023,
        headline: 'Full Stack Developer & AI/ML Student',
        description: 'Passionate about creating elegant solutions to complex problems. I specialize in full-stack development with a growing interest in machine learning and AI.',
        profilePicture: profilePicture, // Updating the profile picture path
    };

    return (
        <section id="bio" className="min-h-screen flex items-center relative overflow-hidden py-5">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl floating"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="max-w-lg">
                            <div className="mb-4">
                                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                    {bioData.education}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Hi, I'm {bioData.name}
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-600 font-semibold mb-6">
                                {bioData.headline}
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {bioData.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <motion.a 
                                    href="#projects"
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View My Work
                                </motion.a>
                                <motion.button 
                                    onClick={() => setIsPopupOpen(true)}
                                    className="btn bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </motion.button>
                            </div>
                            
                            <div className="mt-10 flex items-center space-x-5">
                                <a href="https://github.com/paperbukit" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/paperbukit/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a><a href="https://x.com/paperbukit" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.643 4.937c-.835.37-1.732.62-2.676.732a4.675 4.675 0 002.043-2.573 9.293 9.293 0 01-2.977 1.136A4.646 4.646 0 0016.616 4c-2.573 0-4.655 2.082-4.655 4.655 0 .365.042.72.126 1.063-3.872-.195-7.31-2.052-9.605-4.88a4.655 4.655 0 00-.63 2.337c0 1.617.823 3.045 2.073 3.88a4.617 4.617 0 01-2.107-.58v.058c0 2.247 1.596 4.118 3.72 4.548a4.645 4.645 0 01-2.103.08c.593 1.855 2.313 3.2 4.354 3.24a9.305 9.305 0 01-5.75 1.977c-.373 0-.743-.022-1.107-.065a13.174 13.174 0 007.157 2.1c8.594 0 13.305-7.128 13.305-13.305 0-.203-.005-.405-.014-.607a9.527 9.527 0 002.354-2.433z"/>
                                    </svg>
                                </a>
                                <a href="mailto:dhanushhs1@outlook.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative">
                            {/* Profile image with decorative elements */}
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-20">
                                <Image src={bioData.profilePicture} alt="Profile" layout="fill" objectFit="cover" />
                            </div>
                            
                            {/* Decorative circular backgrounds */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full z-10 translate-x-10 -translate-y-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full z-10 -translate-x-10 translate-y-10"></div>

                            {/* Floating badges */}
                            <motion.div 
                                className="absolute -top-4 -left-8 bg-white shadow-lg rounded-lg px-3 py-2 z-30"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    <span className="text-sm font-medium">Class of {bioData.graduationYear}</span>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute -bottom-4 -right-8 bg-white shadow-lg rounded-lg px-3 py-2 z-30"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <a href="https://vvce.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:no-underline">{bioData.college}</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
        </section>
    );
};

export default Bio;