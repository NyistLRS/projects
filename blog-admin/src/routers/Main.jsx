import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
import LoginRouter from '../views/login/login'
import AppMain from '../views/layout/index'

export default class MainRouter extends Component {
    render() {
        let { location, config } = this.props
        let pathname = location.pathname
        if(pathname === '/login') {
            return <Route path="/login" component={LoginRouter}></Route>
        }else{
            return <Route path={pathname} component={AppMain}></Route>
        }
    }
}