import { projects } from '../data/projects.data'
import { ProjectCard } from '../components/ui/ProjectCard'

export const ProjectSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 mb-11">
      <h2 className="text-3xl font-title font-bold text-start mb-8">
        <span className='text-blueSky'>Projects</span> I’ve worked on
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
} 
