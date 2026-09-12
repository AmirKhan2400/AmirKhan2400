import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="content-section reveal"
      aria-label="Projects"
    >
      <SectionHeading
        number="01"
        title="Selected projects"
        subtitle="A few things I've been building."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
