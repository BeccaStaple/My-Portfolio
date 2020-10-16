import React from "react"
import { Link } from 'react-router-dom';
import Navigate from "./Components/Navigate"

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                    
                        <p ><Link className="menu-item" to="/">Home</Link></p>
                        <p ><Link className="menu-item" to="/projects">Projects</Link></p>
                        <p ><Link className="menu-item" to="/technology">Technology</Link></p>
                        <p ><Link className="menu-item" to="/contect">Contact</Link></p>
                 



               
                <div>
                    <Navigate />
                </div>
            </div>

        );
    }
}