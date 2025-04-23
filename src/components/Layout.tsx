import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('bio');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Determine active section based on scroll position
            const sections = ['bio', 'skills', 'projects', 'goals'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const mobileMenuVariants = {
        closed: { 
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren"
            }
        },
        open: { 
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: -10 },
        open: { opacity: 1, x: 0 }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Function to calculate padding top for main content based on header height
    // This ensures content doesn't get hidden under the fixed header
    const getHeaderHeight = () => {
        if (typeof window !== 'undefined') {
            const header = document.querySelector('header');
            return header ? header.clientHeight : 70; // Default height if header not found
        }
        return 70; // Default for SSR
    };

    // Social media icons
    const socialLinks = [
        { name: 'GitHub', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>, url: 'https://github.com' },
        { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, url: 'https://linkedin.com' },
        { name: 'Twitter', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>, url: 'https://twitter.com' },
        { name: 'Email', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, url: 'mailto:your-email@example.com' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white shadow-md py-5'}`}>
                <div className="container mx-auto flex justify-between items-center px-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                            Dhanush H S
                        </Link>
                    </motion.div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-1 transition-colors"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    
                    {/* Desktop navigation */}
                    <motion.nav 
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        className="hidden md:block"
                    >
                        <ul className="flex space-x-8">
                            {['bio', 'skills', 'projects', 'goals'].map((section, index) => (
                                <motion.li key={section} variants={itemVariants}>
                                    <Link 
                                        href={`#${section}`} 
                                        className={`nav-link relative px-2 py-2 transition-colors duration-200 ${activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                                    >
                                        {section === 'bio' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
                                        {activeSection === section && (
                                            <motion.span 
                                                className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-full" 
                                                layoutId="navIndicator"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
                
                {/* Mobile navigation menu with AnimatePresence for proper exit animations */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                            className="md:hidden bg-white shadow-lg overflow-hidden"
                        >
                            <nav className="container mx-auto py-4 px-4">
                                <ul className="flex flex-col space-y-3">
                                    {['bio', 'skills', 'projects', 'goals'].map((section) => (
                                        <motion.li key={section} variants={mobileItemVariants}>
                                            <Link 
                                                href={`#${section}`} 
                                                className={`block py-2 px-4 rounded-lg transition-all duration-200 ${
                                                    activeSection === section 
                                                        ? 'bg-blue-50 text-blue-600 font-medium' 
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {section === 'bio' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
            
            {/* Main content with dynamic padding to prevent content from being hidden under the fixed header */}
            <main className="flex-grow" style={{ paddingTop: `calc(${getHeaderHeight()}px + 1rem)` }}>
                {children}
            </main>
            
            <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white pt-12 pb-8 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* About section */}
                        <div className="md:col-span-5">
                            <h3 className="text-xl font-bold mb-4 inline-block pb-1 border-b-2 border-blue-500">Dhanush H S</h3>
                            <p className="text-gray-300 mb-6">
                                Aspiring Developer & AI Enthusiast passionate about creating innovative solutions 
                                and exploring the intersection of technology and creativity.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        {/* Quick links */}
                        <div className="md:col-span-3">
                            <h3 className="text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-blue-500">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#bio" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        About Me
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#goals" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Goals
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Contact section */}
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-blue-500">Get In Touch</h3>
                            <p className="text-gray-300 mb-4">
                                Have a question or want to work together? Feel free to reach out!
                            </p>
                            <a 
                                href="mailto:your-email@example.com" 
                                className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Me
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-blue-800 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Dhanush H S. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;