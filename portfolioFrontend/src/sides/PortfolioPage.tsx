import ProjectCard from "../components/projects.tsx"
import { projects, TypeOfProject } from "../data/projects.ts"

export function PortfolioPage() {
    const projectsIndieWorkData = projects.filter(project => project.getTypeOfProject() === TypeOfProject.Independent)

    const projectsIndieWorkSort = projectsIndieWorkData.sort((n1, n2) => n1.getId() - n2.getId())

      const projectIndieCards = projectsIndieWorkSort.map(project => 
        <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} author={project.getAuthor()} description={project.getDescription()} url={project.getUrl()}/>
      );
    
    return(
        <div id="project-section">
          <div id="indie-projects-section">
            <h1>Independent Work</h1>
            <h2>With recent ones</h2>

            <div className="project-wrapper">
              {projectIndieCards}
            </div>
        </div>

        <div id="school-projects-section">
          <h1>School Projects</h1>
          <h2>With recent ones</h2>

          <div>
            
          </div>
        </div>
      </div>
    )
}