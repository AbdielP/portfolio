import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaAngular,
  FaJs,
  FaCss3,
  FaVuejs,
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

  const projects = [
    {
      title: 'Key Lookup & QR Labeling Tool',
      description:
        'A React-based application to streamline key management with Excel-to-MySQL import and QR code generation.',
      image: 'images/dashboard_llaves.png',
      demo: '',
      code: 'https://github.com/CWB-Datacenter/dashboard-llaves',
      tech: ['React', 'MUI', 'PHP', 'MySQL'],
    },
    {
      title: 'QR Codes Application',
      description:
        'QR code generator for datacenter access and registration, with Excel data and label generation.',
      image: 'images/dashboard_qraccess.png',
      demo: '',
      code: 'https://github.com/AbdielP/qrcodeproject',
      tech: ['Angular', 'Node.js', 'MySQL'],
    },
    {
      title: 'SNMP Manager',
      description:
        'A tool to monitor temperature and humidity via SNMP-enabled sensors with a simple web interface.',
      image: 'images/dashboard_snmp.png',
      demo: '',
      code: 'https://github.com/AbdielP/snmp_manager',
      tech: ['JavaScript', 'Node.js'],
    },
    {
      title: 'E-Commerce product page',
      description:
        'A responsive product page built with Angular featuring image previews, cart functionality, and a clean UI.',
      image: 'images/product_page.png',
      demo: 'https://abdielp.github.io/angular-ecommerce-product-page/',
      code: 'https://github.com/AbdielP/angular-ecommerce-product-page',
      tech: ['Angular', 'Typescript', 'CSS'],
    },
    {
      title: 'Room Homepage',
      description:
        ' A responsive landing page built with Vue.js that replicates the interactive design of Room’s homepage. Includes image slider functionality and modern layout practices.',
      image: 'images/room_page.png',
      demo: 'https://abdielp.github.io/vue-room-homepage/',
      code: 'https://github.com/AbdielP/vue-room-homepage',
      tech: ['Vue.js', 'CSS'],
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 mb-11">
      <h2 className="text-3xl font-title font-bold text-start mb-8">
      <span className='text-blueSky'>Projects</span> I’ve worked on
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-lg border border-primary hover:backdrop-blur-xl hover:shadow-lg hover:scale-[1.01] transition-all duration-200 ease-in-out flex flex-col justify-between rounded p-6"
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
                  className="text-blueSky hover:underline text-sm font-medium flex items-center gap-1"
                >
                  <TbWorldSearch  className="w-4 h-4" />
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
        ))}
      </div>
    </section>
  )
}
