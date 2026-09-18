import ProjectCard from "../components/project.tsx"
import { projects, TypeOfProject } from "../data/projects.ts"
import "./FeaturedPage.css"

export function FeaturedPage() {
    const projectsSchoolWorkData = projects.filter(project => project.getTypeOfProject() === TypeOfProject.School);
    const projectsSchoolWorkSort = projectsSchoolWorkData.sort((n1, n2) => n1.getId() - n2.getId());

    const projectSchoolCards = projectsSchoolWorkSort.map(project =>
            <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} author={project.getAuthor()} description={project.getDescription()} url={project.getUrl()}/>
          );

    return (
        <div id="project-section">
            <h1>Featured</h1>
            <div className="project-wrapper">
                {projectSchoolCards}
            </div>
        </div>
    )
}