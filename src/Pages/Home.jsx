import React from "react"
import AboutMe from "../PageComponents/AboutMe"
import AboutMyWork from "../PageComponents/AboutMyWork"
import ProfilePic from "./Becca1.jpg"

export default class Home extends React.Component {
    
    componentDidMount() {
        document.title = "rebecca staple | home";
    }
    
    render() {
        return(
            <div className="middle-sec-div">
            
                <AboutMe />

               
            <div className="pic-sec">
            <img alt="cartoon of me (Becca)" className="profile-pic" src={ProfilePic}/>

            </div>
               
                
                <AboutMyWork />


            </div>
        )
    }
}