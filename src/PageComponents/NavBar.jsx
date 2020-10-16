import React from "react"
import { Link } from 'react-router-dom';
import Navigate from "./Components/Navigate"

export default class NavBar extends React.Component {
    render() {
        return (
            <nav role="navigation">

                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>


                    {/* links to replace a tag later */}
                    <ul id="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/contect">Contact</Link></li>
                    </ul>



                </div>
                <div>
                    <Navigate />
                </div>
            </nav>

        );
    }
}