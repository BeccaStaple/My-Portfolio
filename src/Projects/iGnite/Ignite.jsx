import React from "react"
import coverImg from "./ig1.png"

export default class Ignite extends React.Component {
    render() {
        return (
            <div>
                <img className="cover-img" src={coverImg} />
                <br />
                <a target="_blank" href="https://petitebeccas.wixsite.com/ignite">
                <button className="view-web-btn" type="button" >view website</button>
                </a>
                
            </div>
        )
    }
}