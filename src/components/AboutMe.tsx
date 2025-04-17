
import avatar from '../assets/images/avatar.png'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

export const AboutMe = () => {
    return (
        <section className="relative pb-24 pt-12 px-6" id='about'>
            <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[120px] opacity-10 font-title select-none hidden md:block">
                About
            </h1>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 relative z-10">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-48 h-48 rounded-full object-cover border border-gray-300 shadow"
                />
                <div>
                    <h2 className="text-3xl font-title font-bold mb-4">About <span className='text-blueSky'>Me</span></h2>
                    <p className="mt-6 font-body max-w-lg mx-auto md:mx-0">
                    I enjoy building tools that make people’s work easier. Over the years, I’ve developed internal apps that save time, reduce errors, and improve efficiency. I’m currently pursuing a Master’s in Software Engineering while constantly exploring new technologies and better ways to solve problems.

                    </p>
                    {/* Redes sociales */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-gray-700">
                        <a
                            href="https://github.com/abdiel-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blueSky transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/abdiel-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blueSky transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium underline hover:text-blueSky transition mt-4">
                        Get in touch 
                        {/* <FaArrowRight className="text-xs" /> */}
                    </a>
                </div>
            </div>
        </section>

    )
}
