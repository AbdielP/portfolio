import { JSX } from 'react'
import { Project } from '../../types'
import { LuCodeXml } from 'react-icons/lu'
import { TbWorldSearch } from 'react-icons/tb'
import {
  FaReact, FaNodeJs, FaPhp, FaAngular, FaJs, FaCss3, FaVuejs
} from 'react-icons/fa'
import { SiMysql, SiMui } from 'react-icons/si'

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="w-7 h-7 text-primary" />, 
  'Node.js': <FaNodeJs className="w-7 h-7 text-primary" />,
  PHP: <FaPhp className="w-7 h-7 text-primary" />,
  Angular: <FaAngular className="w-7 h-7 text-primary" />,
  JavaScript: <FaJs className="w-7 h-7 text-primary" />,
  MySQL: <SiMysql className="w-7 h-7 text-primary" />,
  MUI: <SiMui className="w-7 h-7 text-primary" />,
  CSS: <FaCss3 className="w-7 h-7 text-primary" />,
  'Vue.js': <FaVuejs className="w-7 h-7 text-primary" />
}

interface Props {
  project: Project
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="backdrop-blur-lg border border-primary hover:backdrop-blur-xl hover:shadow-lg hover:scale-[1.01] transition-all duration-200 ease-in-out flex flex-col justify-between rounded p-6">
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded-md object-cover h-48 w-full border"
      />

      <div>
        <h3 className="text-xl font-semibold font-title mb-2">{project.title}</h3>
        <p className="text-sm font-body text-gray-700">{project.description}</p>
      </div>

      <div className="flex flex-wrap justify-end gap-3 mt-4 items-center">
        {project.tech.map((tech, i) => (
          <div key={i} className="text-gray-700" title={tech}>
            {techIcons[tech]}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blueSky hover:underline text-sm font-medium flex items-center gap-1"
          >
            <TbWorldSearch className="w-4 h-4" />
            Demo
          </a>
        )}
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blueSky hover:underline text-sm font-medium flex items-center gap-1"
        >
          <LuCodeXml className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  )
} 
