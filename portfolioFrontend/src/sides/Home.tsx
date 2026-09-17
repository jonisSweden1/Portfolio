import "./Home.css"
import background from '../Soothing-nature-backgrounds-2.jpg'
import profile from '../cropped_circle_image.png'
import highCommandProjectPicture from '../Jah3l_.png'
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap"

export const HomePage = () => (
    <div id="background" style={{backgroundImage: `url(${background})`}}>
      <section id="main-section">
        <img src={profile}/>
        <p>Game Developer, Software Engineer</p>
      </section>

      <div id="gradient-transition"/>

      <div id="project-section">
        <h1>Projects</h1>
        <h2>With recent ones</h2>

        <div className="project-wrapper">
        <Card style={{width: '18rem'}}>
          <CardImg variant="top" src={highCommandProjectPicture}/>
          <CardBody>
            <CardTitle>High Command</CardTitle>
            <CardText>High Command is a game made in LBS Kreativa Gymnasiet Borås. This game was nominated for best graphics in LBS Awards 2023.</CardText>
          </CardBody>
          <Button variant="primary" href="https://perception-studios.itch.io/high-command">Go to project</Button>
        </Card>
        <Card style={{width: '18rem'}}>
          <CardHeader>
            Project
          </CardHeader>
          <CardBody>
            <CardTitle>Project Name</CardTitle>
            <CardText>This is a project, with description about the project itself, whatever.</CardText>
          </CardBody>
          <Button variant="primary">Go to project</Button>
        </Card>
        <Card style={{width: '18rem'}}>
          <CardHeader>
            Project
          </CardHeader>
          <CardBody>
            <CardTitle>Project Name</CardTitle>
            <CardText>This is a project, with description about the project itself, whatever.</CardText>
          </CardBody>
          <Button variant="primary">Go to project</Button>
        </Card>
        <Card style={{width: '18rem'}}>
          <CardHeader>
            Project
          </CardHeader>
          <CardBody>
            <CardTitle>Project Name</CardTitle>
            <CardText>This is a project, with description about the project itself, whatever.</CardText>
          </CardBody>
          <Button variant="primary">Go to project</Button>
        </Card>
        <Card style={{width: '18rem'}}>
          <CardHeader>
            Project
          </CardHeader>
          <CardBody>
            <CardTitle>Project Name</CardTitle>
            <CardText>This is a project, with description about the project itself, whatever.</CardText>
          </CardBody>
          <Button variant="primary">Go to project</Button>
        </Card>
        <Card style={{width: '18rem'}}>
          <CardHeader>
            Project
          </CardHeader>
          <CardBody>
            <CardTitle>Project Name</CardTitle>
            <CardText>This is a project, with description about the project itself, whatever.</CardText>
          </CardBody>
          <Button variant="primary">Go to project</Button>
        </Card>
        
        </div>
      </div>
    </div>
)