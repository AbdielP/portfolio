import mainImage from '../assets/images/dev_ilustration2.png'

export const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Texto */}
      <div className="md:w-7/12 text-center md:text-left flex flex-col justify-center md:pl-12">
        <h1 className="text-4xl md:text-5xl font-title font-bold">
          Hi, I’m Abdiel
        </h1>
        <p className="text-lg  mt-4 font-body">
          Fullstack Developer
        </p>
        <p className="mt-6 font-body max-w-md mx-auto md:mx-0">
          Fullstack developer with 4 years of experience building internal tools and automation solutions. Skilled in React, Node.js and JavaScript technologies.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a href="/abdiels-fullstack-developer-resume.pdf"
            download className="bg-green hover:bg-green-dark active:bg-green-light text-white px-6 py-2 rounded-md">Resume</a>
          <a href="#contact" className="border border-black px-6 py-2 rounded-md">Contact</a>
        </div>
      </div>

      {/* Imagen */}
      <div className="md:w-5/12 flex justify-center">
        <img src={mainImage} alt="Illustration of Abdiel" className="w-80 h-auto" />
      </div>
    </section>
  )
}
