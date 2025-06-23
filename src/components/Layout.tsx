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
            let foundSection = false;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        foundSection = true;
                        break;
                    }
                }
            }

            // If no section is found, reset activeSection
            if (!foundSection) {
                setActiveSection('');
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
    const topSocialLinks = [
        { name: 'GitHub', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.0 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>, url: 'https://github.com/paperbukit' },
        { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, url: 'https://www.linkedin.com/in/paperbukit/' },
        { name: 'Twitter', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.937c-.835.37-1.732.62-2.676.732a4.675 4.675 0 002.043-2.573 9.293 9.293 0 01-2.977 1.136A4.646 4.646 0 0016.616 4c-2.573 0-4.655 2.082-4.655 4.655 0 .365.042.72.126 1.063-3.872-.195-7.31-2.052-9.605-4.88a4.655 4.655 0 00-.63 2.337c0 1.617.823 3.045 2.073 3.88a4.617 4.617 0 01-2.107-.58v.058c0 2.247 1.596 4.118 3.72 4.548a4.645 4.645 0 01-2.103.08c.593 1.855 2.313 3.2 4.354 3.24a9.305 9.305 0 01-5.75 1.977c-.373 0-.743-.022-1.107-.065a13.174 13.174 0 007.157 2.1c8.594 0 13.305-7.128 13.305-13.305 0-.203-.005-.405-.014-.607a9.527 9.527 0 002.354-2.433z"/></svg>, url: 'https://twitter.com/paperbukit' },
        { name: 'Email', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, url: 'mailto:dhanushhs1@outlook.com' },
    ];

    const handleNavigation = (section: string) => {
        const currentPath = window.location.pathname;
        if (currentPath !== '/') {
            window.location.href = `/?section=${section}`;
        } else {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white shadow-md py-5'}`}>
                <div className="container mx-auto flex justify-between items-center px-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800">
                            Dhanush H S
                        </Link>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md p-1 transition-colors"
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
                                        href="#" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(section);
                                        }} 
                                        className={`nav-link relative px-2 py-2 transition-colors duration-200 ${activeSection === section ? 'text-gray-800 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                                    >
                                        {section === 'bio' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
                                        {activeSection === section && (
                                            <motion.span 
                                                className="absolute bottom-0 left-0 h-0.5 bg-gray-600 w-full" 
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
                                                        ? 'bg-gray-50 text-gray-600 font-medium' 
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

            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-8 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* About section */}
                        <div className="md:col-span-5">
                            <h3 className="text-xl font-bold mb-4 inline-block pb-1 border-b-2 border-gray-500">Dhanush H S</h3>
                            <p className="text-gray-300 mb-6">
                                Aspiring Developer & AI Enthusiast passionate about creating innovative solutions 
                                and exploring the intersection of technology and creativity.
                            </p>
                            <div className="flex space-x-4 items-center justify-center">
                                {topSocialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center shadow-md"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        {/* Quick links */}
                        <div className="md:col-span-3">
                            <h3 className="text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-gray-500">Quick Links</h3>
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
                            <h3 className="text-lg font-semibold mb-4 inline-block pb-1 border-b-2 border-gray-500">Get In Touch</h3>
                            <p className="text-gray-300 mb-4">
                                Have a question or want to work together? Feel free to reach out!
                            </p>
                            <a 
                                href="mailto:dhanushhs1@outlook.com" 
                                className="inline-flex items-center px-5 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white font-medium transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Me
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Dhanush H S. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;