import { projects } from '../data/projects.data'
import { ProjectCard } from '../components/ui/ProjectCard'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const ProjectSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 mb-11">
      <h2 className="text-3xl font-title font-bold text-start mb-8">
        <span className='text-blueSky'>Projects</span> I’ve worked on
      </h2>

      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  )
} 
