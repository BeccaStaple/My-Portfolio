import React from "react"
import AboutMe from "../PageComponents/AboutMe"
import AboutMyWork from "../PageComponents/AboutMyWork"

export default class Home extends React.Component {
    render() {
        return(
            <div className="middle-sec-div">
            
                <AboutMe />

               

{/* picture of me to add */}
                
                <AboutMyWork />


            </div>
        )
    }
}