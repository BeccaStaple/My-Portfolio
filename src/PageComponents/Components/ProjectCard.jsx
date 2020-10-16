import React from "react"
import { Card, Button } from "react-bootstrap"


export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
        }
    }

    render() {
        return (

            <div>
                <div className="project-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title>Project Title: {this.props.title}</Card.Title>
                            <Card.Text>
                                Data Completed: {this.props.dateCompleted}
                                <br/>
                                {this.props.about}
                                <br/>
                                Tech Stack: {this.props.techUsed}
                            </Card.Text>
                            <Button target="_blank" href={this.props.gitLink} variant="primary">View GitHub</Button>
                            <Button target="_blank" href={this.props.webLink} variant="primary">View Website</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}