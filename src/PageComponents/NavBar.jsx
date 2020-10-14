import React from "react"

export default class NavBar extends React.Component {
    render() {
        return(
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>


{/* links to replace a tag later */}
                        <ul id="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                        </ul>

                    </div>
                </nav>

        );
    }
}