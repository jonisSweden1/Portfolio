import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"

export default function ProjectCard({
  imgSrc, 
  title, 
  description, 
  url
} : {
  imgSrc: string
  title: string
  description: string
  url: string}) {
    return (
        <Card style={{width: '18rem'}}>
          <CardImg variant="top" src={imgSrc}/>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
          <Button variant="primary" href={url}>Go to project</Button>
        </Card>
    )
}