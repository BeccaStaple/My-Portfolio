import React from "react"

import AboutMe from "./AboutMe"
import Footer from "./Footer"


export default class MainContainer extends React.Component {

    render() {
        return (
            <div className="main-container">


                <AboutMe />

                <Footer />


            </div>
        )
    }
}