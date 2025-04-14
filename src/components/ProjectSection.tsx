import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaAngular,
  FaJs,
} from 'react-icons/fa'
import {
  SiMysql,
  SiMui,
} from 'react-icons/si'
import { LuCodeXml } from "react-icons/lu";
import { TbWorldSearch } from "react-icons/tb";
import { JSX } from 'react'

export const ProjectSection = () => {
  const techIcons: Record<string, JSX.Element> = {
    React: <FaReact className="w-7 h-7 text-cyan-500" />,
    'Node.js': <FaNodeJs className="w-7 h-7 text-green-600" />,
    PHP: <FaPhp className="w-7 h-7 text-indigo-600" />,
    Angular: <FaAngular className="w-7 h-7 text-red-600" />,
    JavaScript: <FaJs className="w-7 h-7 text-yellow-400" />,
    MySQL: <SiMysql className="w-7 h-7 text-blue-700" />,
    MUI: <SiMui className="w-7 h-7 text-sky-500" />,
  }

  const projects = [
    {
      title: 'Key Lookup & QR Labeling Tool',
      description:
        'A React-based application to streamline key management with Excel-to-MySQL import and QR code generation.',
      image: '/images/dashboard_llaves.png',
      demo: '',
      code: 'https://github.com/CWB-Datacenter/dashboard-llaves',
      tech: ['React', 'MUI', 'PHP', 'MySQL'],
    },
    {
      title: 'QR Codes Application',
      description:
        'QR code generator for datacenter access and registration, with Excel data and label generation.',
      image: '/images/dashboard_qraccess.png',
      demo: '',
      code: 'https://github.com/AbdielP/qrcodeproject',
      tech: ['Angular', 'Node.js', 'MySQL'],
    },
    {
      title: 'SNMP Manager',
      description:
        'A tool to monitor temperature and humidity via SNMP-enabled sensors with a simple web interface.',
      image: '/images/dashboard_snmp.png',
      demo: '',
      code: 'https://github.com/AbdielP/snmp_manager',
      tech: ['JavaScript', 'Node.js'],
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-title font-bold text-start mb-12">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200 ease-in-out flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 rounded-md object-cover h-48 w-full border"
            />

            <div>
              <h3 className="text-xl font-semibold font-title mb-2">{project.title}</h3>
              <p className="text-sm font-body text-gray-700">{project.description}</p>
            </div>
            {/* TECH ICONS  */}
            {project.tech && (
              <div className="flex flex-wrap justify-end gap-3 mt-4 items-center">
                {project.tech.map((tech, i) =>
                  techIcons[tech] ? (
                    <div key={i} className="text-gray-700" title={tech}>
                      {techIcons[tech]}
                    </div>
                  ) : null
                )}
              </div>
            )}
            {/* CODE AND DEMO LINKS  */}
            <div className="flex gap-4 mt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:underline text-sm font-medium flex items-center gap-1"
                >
                  <TbWorldSearch  className="w-4 h-4" />
                  Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:underline text-sm font-medium flex items-center gap-1"
              >
                <LuCodeXml className="w-4 h-4" />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
