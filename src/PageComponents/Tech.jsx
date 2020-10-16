import React from "react"
import LanguageList from "./Components/LanguageList"
import FrameworkList from "./Components/FrameworkList"
import TestingList from "./Components/TestingList"
import OtherList from "./Components/OtherList"

export default class Tech extends React.Component {
    constructor() {
        super();
        this.state = {
            myTech : []
        }
    }
    render() {
        return (
            <div className="tech-section">
                <LanguageList />
                <TestingList />
                <FrameworkList />
                <OtherList />
            </div>
        )
    }
}