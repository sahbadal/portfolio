import { skills } from '../data/skills.jsx'
import { Server, Brain, Code, Database } from 'lucide-react'


const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
                    <p className="text-lg text-gray-600">Technologies I love working with</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Languages */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <Code className="text-blue-600 mr-3" size={24} />
                            <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
                        </div>
                        <div className="space-y-3">
                            {skills.languages.map((skill, index) => (
                                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <span className="font-medium text-gray-800">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <Server className="text-green-600 mr-3" size={24} />
                            <h3 className="text-xl font-semibold text-gray-900">Frameworks & Libraries</h3>
                        </div>
                        <div className="space-y-3">
                            {skills.frameworks.map((skill, index) => (
                                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <span className="font-medium text-gray-800">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* database */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <Database className="text-green-600 mr-3" size={24} />
                            <h3 className="text-xl font-semibold text-gray-900">Database</h3>
                        </div>
                        <div className="space-y-3">
                            {skills.databases.map((skill, index) => (
                                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <span className="font-medium text-gray-800">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                            <Brain className="text-purple-600 mr-3" size={24} />
                            <h3 className="text-xl font-semibold text-gray-900">Tools & AI</h3>
                        </div>
                        <div className="space-y-3">
                            {skills.tools.map((skill, index) => (
                                <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <span className="font-medium text-gray-800">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills