import { FaAngular, FaCss3, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { SiDotnet, SiMongodb, SiMui, SiMysql, SiPostgresql } from 'react-icons/si'
import { TbWorldSearch } from 'react-icons/tb'
import { IconBox } from './ui/IconBox'
import { motion } from 'framer-motion'

export const MyStack = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 text-primary" id='techs'>
            <h2 className="text-3xl font-title font-bold text-center md:text-end mb-8">
                Tech <span className='text-blueSky'>Stack</span>
            </h2>

            <motion.div
                className="flex flex-wrap justify-center gap-y-10 gap-x-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <IconBox title="React"><FaReact /></IconBox>
                <IconBox title="Node.js"><FaNodeJs /></IconBox>
                <IconBox title="JavaScript"><FaJs /></IconBox>
                <IconBox title="MySQL"><SiMysql /></IconBox>
                <IconBox title="MUI"><SiMui /></IconBox>
                <IconBox title="PHP"><FaPhp /></IconBox>
                <IconBox title="Angular"><FaAngular /></IconBox>
                <IconBox title="Web APIs"><TbWorldSearch /></IconBox>
                <IconBox title="PostgreSQL"><SiPostgresql /></IconBox>
                <IconBox title="CSS3"><FaCss3 /></IconBox>
                <IconBox title=".NET"><SiDotnet /></IconBox>
                <IconBox title="MongoDB"><SiMongodb /></IconBox>
            </motion.div>
        </section>
    )
}
