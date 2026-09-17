import "./Home.css"
import background from '../images/Soothing-nature-backgrounds-2.jpg'
import profile from '../images/cropped_circle_image.png'
import highCommandProjectPicture from '../images/Jah3l_.png'
import joyOfCorpsePartyProjectPic from '../images/JoyOfCorpseParty_ProjectPicture.png'
import ProjectCard from "../components/project.tsx"

export const HomePage = () => (
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
        <ProjectCard imgSrc={highCommandProjectPicture} title="High Command" 
          description="High Command is a game made in LBS Kreativa Gymnasiet. The game was nominated for best 3D graphics in LBS Awards 2023" 
          url="https://perception-studios.itch.io/high-command"/>
        <ProjectCard imgSrc={joyOfCorpsePartyProjectPic} title="The Joy of Corpse Party" 
          description="The Joy of Corpse Party is a game made by Jonathan Sandström. This game is going to be published as a working prototype in itch.io soon. But meanwhile, there is a GitHub repository for the project."
          url="https://github.com/jonisSweden1/TheJoyOfCorpseParty"/>
        </div>
      </div>
    </div>
)