import React from "react"
import Name from "./Components/Name"

export default class Header extends React.Component {
    render() {
        return (
            <div className="name-header">
                <Name/>
            </div>
        )
    }
}