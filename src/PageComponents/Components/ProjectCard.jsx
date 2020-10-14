import React from "react"
import {Card, Button} from "react-bootstrap"


export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
        }
    }
    
    render() {
        return (
            
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                         <Card.Title>Project Title: {this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.about}
                            {this.props.tech}
                        </Card.Text>
                        <Button _target href={this.props.link} variant="primary">View On GitHub</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}