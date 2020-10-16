import React from "react"
import Name from "./Components/Name"
import NavBar from "./NavBar"

export default class Header extends React.Component {
    render() {
        return (
            <div className="name-header">
                <Name/>
                <NavBar />
                
            </div>
        )
    }
}