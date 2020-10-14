import React from "react"
import ProjectCard from "../Components/ProjectCard"
import ProjectData from "../Data/ProjectData"

export default class ProjectSection extends React.Component {

    constructor() {
        super();
        this.state = {
            ProjectData : []
        }
    }

    render() {
        return (
            <div className="project-section">
                {ProjectData.map(pd => <ProjectCard {...pd}/>)}
            </div>
        )
    }
}