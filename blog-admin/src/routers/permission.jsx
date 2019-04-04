import React,{ Component } from 'react'

// import { Route } from 'react-router-dom'
import getRouter from '../utils/getRouter.js'

export default class PermissRouter extends Component {
    render() {
        let { location } = window,
            route = getRouter(location.pathname)
        if (location.pathname !== '/login') {
            return <route.component></route.component>
        }
    }
}