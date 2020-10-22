import React from "react"
import LanguageList from "../PageComponents/Components/LanguageList"
import FrameworkList from "../PageComponents/Components/FrameworkList"
import TestingList from "../PageComponents/Components/TestingList"
import OtherList from "../PageComponents/Components/OtherList"

export default class TechPage extends React.Component {
    componentDidMount() {
        document.title = "rebecca staple | technology";
    }
    
    render() {
        return (
            <div className="tech-section">
                <h3>Languages:</h3>
                <LanguageList />
                <h3>Frameworks / Libraries:</h3>
                <FrameworkList />
                <h3>Testing Frameworks:</h3>
                <TestingList />
                <h3>Other:</h3>
                <OtherList />
            </div>
        )
    }
}