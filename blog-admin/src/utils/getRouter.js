import routes from '../routers/routes'

const getCurrntRoute = (path) => {
    let route
    routes.map(res => {
        if (res.pathname === path) {
            route = res
        }
    })
    if (!route) {
        route = routes[0]
    }
    return route
}

export default getCurrntRoute