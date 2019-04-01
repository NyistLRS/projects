import User from '../views/user/index'
import Home from '../views/dashbord/index'
import Menu from '../views/menu/index'
export default [
    {
        pathname: '/',
        component: Home,
        auth: true
    },
    {
        pathname: '/user',
        component: User,
        auth: true
    },{
        pathname: '/menu',
        component: Menu,
        auth: true
    }
]
