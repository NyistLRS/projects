import axios from 'axios'

const service = axios.create({
    baseURL: ''
})

// request 拦截器

service.interceptors.request.use(config => {
    config.headers['token'] = '11111'
    return config
}, error => {
    Promise.reject(error)
})

// response 拦截器

service.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

export default service