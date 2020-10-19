import React from "react"
import { Link } from 'react-router-dom';
import Navigate from "./Components/Navigate"

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                    
                        <p ><Link className="menu-item" to="/">home</Link></p>
                        <p ><Link className="menu-item" to="/projects">projects</Link></p>
                        <p ><Link className="menu-item" to="/technology">technology</Link></p>
                        <p ><Link className="menu-item" to="/contact">contact</Link></p>
                 



               
                <div>
                    <Navigate />
                </div>
            </div>

        );
    }
}