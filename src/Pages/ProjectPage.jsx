import React from "react"
import ProjectIntro from "../PageComponents/ProjectIntro"
import Project2Text from "../PageComponents/Project2Text"
import Ignite from "../Projects/iGnite/Ignite"
import BestFlowers from "../Projects/BestFlowers/BestFlowers"

export default class ProjectPage extends React.Component {
    render() {
        return (
            <div>
                <Project2Text />

                <div className="projects">
                    <Ignite />
                    <BestFlowers />

                </div>



                <ProjectIntro />
            </div>
        )
    }
}