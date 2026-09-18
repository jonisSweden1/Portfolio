import ProjectCard from "../components/projects.tsx"
import { projects, TypeOfProject } from "../data/projects.ts"

export function PortfolioPage() {
    const projectsIndieWorkData = projects.filter(project => project.getTypeOfProject() === TypeOfProject.Independent)

    const projectsIndieWorkSort = projectsIndieWorkData.sort((n1, n2) => n1.getId() - n2.getId())

      const projectCards = projectsIndieWorkSort.map(project => 
        <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} description={project.getDescription()} url={project.getUrl()}/>
      );
    
    return(
        <div id="project-section">
        <h1>Independent Work</h1>
        <h2>With recent ones</h2>

        <div className="project-wrapper">
          {projectCards}
        </div>
      </div>
    )
}