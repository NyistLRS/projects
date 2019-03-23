
import  HomeIndex  from '../../views/home/HomeIndex'
import  Login  from '../../views/login/login' 

export const routerConfig = [
    {
        path: '/',
        component: HomeIndex,
        auth: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '',
        component: HomeIndex,
        auth: true
    }
]
export const getCurrntRoute = (path, routes) => {
    let route
    routes.map(res => {
        if(res.path === path) {
            route = res
        }
    })
    return route
}