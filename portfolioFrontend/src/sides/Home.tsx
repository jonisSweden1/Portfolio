import "./Home.css"
import background from '../images/Soothing-nature-backgrounds-2.jpg'
import profile from '../images/cropped_circle_image.png'
import ProjectCard from "../components/projects.tsx"
import { projects } from "../data/projects.ts"

export function HomePage() {
  const projectsData = projects.sort((n1, n2) => n1.getId() - n2.getId())

  const projectCards = projectsData.map(project => 
    <ProjectCard key={project.getId()} imgSrc={project.getImageUrl()} title={project.getTitle()} description={project.getDescription()} url={project.getUrl()}/>
  );

  return(
    <div id="background" style={{backgroundImage: `url(${background})`}}>
      <section id="main-section">
        <img src={profile}/>
        <p>Game Developer, Software Engineer</p>
      </section>

      <div id="home-gradient-transition"/>

      <div id="project-section">
        <h1>Projects</h1>
        <h2>With recent ones</h2>

        <div className="project-wrapper">
          {projectCards}
        </div>
      </div>
    </div>
  )
}