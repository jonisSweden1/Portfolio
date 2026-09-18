import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "react-bootstrap";

// This is a component for Blog, where it is going to put an embedded link to PDF file.
export function BlogCard() {
    return (
        <Card>
            <CardHeader>
                <CardImg/>
                <CardTitle>

                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>

                </CardText>
            </CardBody>
        </Card>
    )
}

export function Blog({title} : {title:string}) {
    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>
        </div>
    )
}