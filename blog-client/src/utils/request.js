import request from "./interceptors"
import qs from 'qs'

let http = {
    post: '',
    get: ''
}

http.post = function (api, data) {
    let params = qs.stringify(data)
    return new Promise((resolve,reject) => {
        request.post(api,params).then(res => {
            resolve(res)
        })
    })
}

http.get = function (api, data) {
    let params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        request.get(api, params).then(res => {
            resolve(res)
        }).catch(res => {
            debugger
        })
    })
}

export default http