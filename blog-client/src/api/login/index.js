import http from '../../utils/request'

export const login = function (name, psw) {
    return http.post('/login', {
        name: name,
        psw: psw
    })
}

export const checkName = function(name) {
    return http.get('/checkName', {
        userName: name
    })
}