import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class PerMission extends React.Component {
    render() {
        console.log(this.props)
        const { location, config } = this.props
        const { pathname } = location
        const isLogin = localStorage.getItem('__config_center_token')
        let component1
        if(!isLogin) { // 判断是否登录,isLogin不存在
            if (pathname === '/login') {
                component1 = config.getCurrntRoute(pathname, config.routerConfig)
                return <Route exact path='/login' component={component1.component}></Route>
            }else{
                return <Redirect to="/login"></Redirect>
            }
        }else {
            if (pathname === '/login') {
                return <Redirect to="/"></Redirect>
            }
            component1 = config.getCurrntRoute(pathname, config.routerConfig)
            return <Route exact path={pathname} component={component1.component}></Route>
        }
        
    }
}