import React from 'react';
import { useRouter } from 'next/router';

const ProjectDetails: React.FC = () => {
    const router = useRouter();
    const { title, description, tags, link } = router.query;

    return (
        <section className="min-h-screen py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>
                <p className="text-gray-600 text-center mb-4">{description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {tags && Array.isArray(tags) && tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-sm bg-gray-200 text-gray-800 py-1 px-2 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="text-center">
                    <a
                        href={link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
