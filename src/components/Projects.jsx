import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects.js';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🚀 Featured Projects</h2>
                    <p className="text-lg text-gray-600">A showcase of some cool stuff I've built</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="overflow-hidden h-48 relative">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex justify-between mt-auto pt-4 border-t">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition"
                                        >
                                            <ExternalLink size={18} />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
