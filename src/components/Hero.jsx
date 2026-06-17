import { Download, Github, Linkedin } from 'lucide-react'
import badalImage from '../assets/badal.png'

const Hero = () => {
    return (
        <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1 ">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Hi, I'm <span className="text-blue-600">Badal Sah</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                            Full-Stack Developer | React.js | Node.js | Next.js | GenAI Powered Web Apps
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                            I build scalable full-stack apps with modern UI and Generative AI integration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="/Badal-web.pdf"
                                download
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>
                            <a
                                href="https://github.com/sahbadal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                            >
                                <Github size={20} />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative">
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src={badalImage}
                                    alt="Badal Sah - Full Stack Developer"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero