import React from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import AboutMe from "./AboutMe"
import Tech from "./Tech"
import Socials from "./Components/Socials"
import ProjectSection from "./Components/ProjectSection"


export default class MainContainer extends React.Component {

    render() {
        return (
            <div className="main-container">
                <NavBar />
                <Header />

                <div className="mid-section">
                    <div className="left-side">
                        <AboutMe />
                        <Tech />
                    </div>

                    <div className="right-side">
                        
                        
                    </div>
                </div>

                <ProjectSection />

            <div className="footer">
            <Socials />
            </div>
                
            </div>
        )
    }
}