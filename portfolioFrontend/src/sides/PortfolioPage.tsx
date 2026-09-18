import ProjectCard from "../components/project.tsx"
import { projects, TypeOfProject } from "../data/projects.ts"
import "./PortfolioPage.css"

export function PortfolioPage() {
    const projectsIndieWorkData = projects.filter(project => project.getTypeOfProject() === TypeOfProject.Independent)
    const projectsSchoolWorkData = projects.filter(project => project.getTypeOfProject() === TypeOfProject.School)

    const projectsIndieWorkSort = projectsIndieWorkData.sort((n1, n2) => n1.getId() - n2.getId())
    const projectsSchoolWorkSort = projectsSchoolWorkData.sort((n1, n2) => n1.getId() - n2.getId())

      const projectIndieCards = projectsIndieWorkSort.map(project => 
        <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} author={project.getAuthor()} description={project.getDescription()} url={project.getUrl()}/>
      );
      const projectSchoolCards = projectsSchoolWorkSort.map(project =>
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

          <div className="project-wrapper">
            {projectSchoolCards}
          </div>
        </div>
      </div>
    );
}