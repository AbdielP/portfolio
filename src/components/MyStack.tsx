import { FaAngular, FaCss3, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { SiDotnet, SiMongodb, SiMui, SiMysql, SiPostgresql } from 'react-icons/si'
import { TbWorldSearch } from 'react-icons/tb'

export const MyStack = () => {
    const icons = [
        <FaReact title="React" />,
        <FaNodeJs title="Node.js" />,
        <FaJs title="JavaScript" />,
        <SiMysql title="MySQL" />,
        <SiMui title="MUI" />,
        <FaPhp title="PHP" />,
        <FaAngular title="Angular" />,
        <TbWorldSearch title="Web APIs" />,
        <SiPostgresql title="PostgreSQL" />,
        <FaCss3 title="CSS3" />,
        <SiDotnet title=".NET" />,
        <SiMongodb title="MongoDB" />
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 text-primary" id='techs'>
            <h2 className="text-3xl font-title font-bold text-center md:text-end mb-8">
                Tech <span className='text-blueSky'>Stack</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-y-10 gap-x-10 sm:gap-x-8 max-w-full">

                {icons.map((Icon, i) => (
                    <div
                        key={i}
                        className="w-[33.33%] xs:w-[25%] sm:w-[20%] md:w-[16.66%] max-w-[120px] flex justify-center items-center">
                        <div className="text-5xl md:text-6xl border border-primary rounded-md px-6 py-4 md:px-8 md:py-6 backdrop-blur-sm hover:scale-[1.05] transition-all duration-200">
                            {Icon}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
