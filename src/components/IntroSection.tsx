import mainImage from '../assets/images/dev_ilustration2.png'
import { MdDownload } from "react-icons/md"

export const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Texto */}
      <div className="md:w-7/12 text-center md:text-left flex flex-col justify-center md:pl-12">
        <h1 className="text-4xl md:text-5xl font-title font-bold">
          Hi, I’m <span className='text-blueSky'>Abdiel</span>
        </h1>
        <p className="mt-2 font-body max-w-md mx-auto md:mx-0">
          Fullstack Developer
        </p>
        <p className="mt-6 font-body max-w-lg mx-auto md:mx-0">
          I'm a <span className='text-blueSky'>Fullstack developer </span>with 4 years of experience building internal tools and automation solutions. Skilled in React, Node.js and JavaScript technologies.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="/abdiels-fullstack-developer-resume.pdf"
            download
            className="bg-blueSky hover:bg-blueSky-dark active:bg-blueSky-light text-white px-6 py-2 rounded-sm font-body text-sm tracking-wide uppercase flex items-center gap-2 transition-all duration-200"
          >
            <MdDownload className="text-base translate-y-[1px]" />
            Resume
          </a>
          <a
            href="#contact"
            className="border border-gray-800 px-6 py-2 rounded-sm font-body text-sm tracking-wide uppercase hover:bg-gray-100 transition-colors duration-200  F"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-5/12 flex justify-center">
        <img src={mainImage} alt="Illustration of Abdiel" className="w-80 h-auto" />
      </div>
    </section>
  )
}
