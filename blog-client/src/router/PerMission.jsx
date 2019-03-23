import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class PerMission extends React.Component {
    render() {
        console.log(this.props)
        const { location, config } = this.props
        const { pathname } = location
        const isLogin = localStorage.getItem('__config_center_token')
        let component1
        if(!isLogin && pathname !== "/login") { // 判断是否登录
            return <Redirect to="/login"></Redirect>
        }else {
            component1 = config.getCurrntRoute(pathname, config.routerConfig)
            return <Route exact path={pathname} component={component1.component}></Route>
        }
        
    }
}