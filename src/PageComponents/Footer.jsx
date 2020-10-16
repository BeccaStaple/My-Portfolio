import React from "react"
import Socials from "./Components/Socials"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <hr id="footer-line"/>
                <Socials/>
                <p className="full-disclosure">
                    (Full disclosure: I am neither Japanese or French - just apologetically English)
                </p>
            </div>
        )
    }
 }