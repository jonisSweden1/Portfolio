import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap"

export default function ProjectCard({
  imgSrc, 
  title, 
  author,
  description, 
  url
} : {
  imgSrc: string
  title: string
  author: string
  description: string
  url: string}) {
    return (
        <Card style={{width: '18rem'}}>
          <CardImg variant="top" src={imgSrc}/>
          <CardHeader>
            <CardTitle>{title} : {author}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>{description}</CardText>
          </CardBody>
          <Button variant="primary" href={url}>Go to project</Button>
        </Card>
    )
}