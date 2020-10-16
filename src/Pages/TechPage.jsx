import React from "react"
import LanguageList from "../PageComponents/Components/LanguageList"
import FrameworkList from "../PageComponents/Components/FrameworkList"
import TestingList from "../PageComponents/Components/TestingList"
import OtherList from "../PageComponents/Components/OtherList"

export default class TechPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Languages:</h2>
                <LanguageList />
                <h2>Frameworks / Libraries:</h2>
                <FrameworkList />
                <h2>Testing Frameworks:</h2>
                <TestingList />
                <h2>Other:</h2>
                <OtherList />
            </div>
        )
    }
}