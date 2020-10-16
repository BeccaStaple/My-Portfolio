import React from "react"
import { Switch, Route} from 'react-router-dom'
import ContactPage from "../../Pages/ContactPage"
import Home from "../../Pages/Home"
import ProjectPage from "../../Pages/ProjectPage"
import TechPage from "../../Pages/TechPage"

export default class Navigate extends React.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={ProjectPage}/>
                    <Route exact path="/technology" component={TechPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                </Switch>

            </div>
        )
    }
}