import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
// import login  from './login/index'
import  PerMission  from './PerMission'
const login = require("./login/index")

export default class RouterView extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <PerMission config={login}></PerMission>
                </Switch>
            </Router>
        )
    }
}