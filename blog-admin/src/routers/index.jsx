import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
// import FirstIndex from '../views/dashbord/index'
// import UserRouter from './user/index'
// import UserSet from '../views/user/index'
import Permission from './permission'
import config from './routes'
export default class RouterView extends React.Component {
    render() {
        return( // 按需加载的做法，错误的地方，外层需要包裹一个Router，不然会报错
            <Router>
                <Switch>
                    {/* <Route path="/" exact render = {() => (
                    <Redirect to="/index" />
                    )} />
                    <Route path="/index" component={FirstIndex} />
                    <Route path="/user" component={UserSet} /> */}
                    {/* <UserRouter/> */}
                    <Permission config={config}></Permission>
                </Switch>
            </Router>
        )
    }
}