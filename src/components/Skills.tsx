import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    // Example data - would be fetched from Sanity in a real implementation
    const skills = {
        programming: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
        webDevelopment: ['React', 'Next.js', 'Node.js', 'Express', 'HTML/CSS', 'Tailwind CSS'],
        databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
        tools: ['Git', 'Docker', 'AWS', 'Figma', 'Visual Studio Code'],
        interests: ['Machine Learning', 'Blockchain', 'IoT', 'Cloud Computing']
    };

    // Proficiency levels for skill visualization
    const proficiencyLevels = {
        'JavaScript': 60,
        'TypeScript': 50,
        'React': 55,
        'Next.js': 45,
        'Node.js': 50,
        'Python': 40,
        'Java': 35,
        'MongoDB': 50,
        'Git': 60,
    };

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    const categoryVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    // Function to render skill badges with different colors based on category
    const renderSkillBadges = (skillsArray: string[], colorClass: string) => {
        return skillsArray.map((skill, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                className={`px-4 py-2 rounded-full ${colorClass} whitespace-nowrap text-sm font-medium shadow-sm transition-all duration-300`}
            >
                {skill}
            </motion.div>
        ));
    };

    // Function to render skill bars for featured skills
    const renderSkillBar = (skill: string, percentage: number, colorClass: string) => {
        return (
            <motion.div 
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
            >
                <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <span className="text-sm text-gray-500">{percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                        className={`h-full ${colorClass}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    />
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            My Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I've developed a diverse skill set across various technologies and domains.
                        Here's what I bring to the table:
                    </p>
                </motion.div>

                {/* Featured Skills with Progress Bars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Proficiencies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                {renderSkillBar('JavaScript', proficiencyLevels['JavaScript'], 'bg-gray-500')}
                                {renderSkillBar('TypeScript', proficiencyLevels['TypeScript'], 'bg-gray-600')}
                                {renderSkillBar('React', proficiencyLevels['React'], 'bg-gray-700')}
                                {renderSkillBar('Next.js', proficiencyLevels['Next.js'], 'bg-gray-800')}
                            </div>
                            <div>
                                {renderSkillBar('Node.js', proficiencyLevels['Node.js'], 'bg-green-600')}
                                {renderSkillBar('Python', proficiencyLevels['Python'], 'bg-green-700')}
                                {renderSkillBar('MongoDB', proficiencyLevels['MongoDB'], 'bg-green-500')}
                                {renderSkillBar('Git', proficiencyLevels['Git'], 'bg-green-800')}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Programming Languages */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <motion.div variants={categoryVariants} className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Programming Languages</h3>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {renderSkillBadges(skills.programming, 'bg-gray-50 text-gray-700')}
                        </div>
                    </motion.div>

                    {/* Web Development */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <motion.div variants={categoryVariants} className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {renderSkillBadges(skills.webDevelopment, 'bg-gray-50 text-gray-700')}
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <motion.div variants={categoryVariants} className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Databases</h3>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {renderSkillBadges(skills.databases, 'bg-green-50 text-green-700')}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <motion.div variants={categoryVariants} className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Tools & Platforms</h3>
                        </motion.div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {renderSkillBadges(skills.tools, 'bg-red-50 text-red-700')}
                        </div>
                    </motion.div>
                </div>

                {/* Interests - Full width */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow mt-8 border border-gray-100"
                >
                    <motion.div variants={categoryVariants} className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-7 h-7 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Areas of Interest</h3>
                    </motion.div>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {renderSkillBadges(skills.interests, 'bg-amber-50 text-amber-700')}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;