import React from "react"
import coverImg from "./CoverPic.png"

export default class BestFlowers extends React.Component {
    render() {
        return (
            <div>
                <img className="cover-img" src={coverImg} />
                <br />
                <a target="_blank" href="https://rebeccajstaple734118865.wordpress.com/">
                <button className="view-web-btn" type="button" >View Website</button>
                </a>
                
            </div>
        )
    }
}