import { FaAngular, FaCss3, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { SiDotnet, SiMongodb, SiMui, SiMysql, SiPostgresql } from 'react-icons/si'
import { TbWorldSearch } from 'react-icons/tb'

export const MyStack = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-title font-bold text-center md:text-end mb-14">Tech Stack</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-20 gap-x-12 justify-items-center text-primary text-center">
                <FaReact className="w-12 h-12" title="React" />
                <FaNodeJs className="w-12 h-12" title="Node.js" />
                <FaJs className="w-12 h-12" title="JavaScript" />
                <SiMysql className="w-12 h-12" title="MySQL" />
                <SiMui className="w-12 h-12" title="MUI" />
                <FaPhp className="w-12 h-12" title="PHP" />
                <FaAngular className="w-12 h-12" title="Angular" />
                <TbWorldSearch className="w-12 h-12" title="Web APIs / Tools" />
                <SiPostgresql className="w-12 h-12" title="PostgreSQL" />
                <FaCss3 className="w-12 h-12" title="CSS3" />
                <SiDotnet className="w-12 h-12" title=".NET" />
                <SiMongodb className="w-12 h-12" title="MongoDB" />
            </div>
        </section>
    )
}
