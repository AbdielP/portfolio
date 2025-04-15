import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const ContactSection = () => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    setEmail('abdiel.pinzon@gmail.com')
  }, [])

  return (
    <section className="bg-white py-20 px-6" id='contact'>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-title">
          Contact me
        </h2>

        <p className="text-gray-600 mb-10 font-body max-w-xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 font-body text-gray-700 text-lg mb-12">
          <div className="flex items-center gap-2">
            <FaEnvelope className="font-title text-xl" />
            {email && (
              <a href={`mailto:${email}`} className="hover:underline font-semibold">
                {email}
              </a>
            )}

          </div>
          {/* <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blueSky text-lg" />
            <a href="tel:+50760000000" className="hover:underline font-semibold">
              +507 6000-0000
            </a>
          </div> */}
        </div>

        <p className="text-sm text-gray-500 mb-3 font-body">
          You can also find me on these platforms:
        </p>
        <div className="flex justify-center gap-6 text-2xl text-gray-700">
          <a
            href="https://github.com/abdiel-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blueSky transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abdiel-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blueSky transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

