import request from '../../utils/request'

export const getMenus = () => {
    return request({
        method: 'get',
        url: '/admin/getMenus',
        params: {
        }
    })
}

export const getMenuInfo = (key) => {
    return request({
        method: 'get',
        url: '/admin/getMenuInfo',
        params: {
            ...key
        }
    })
}

export const setMenuInfo = (data) => {
    return request({
        method: 'post',
        url: '/admin/setMenuInfo',
        data: {
            ...data
        }
    })
}

export const addMenu = (data) => {
    return request({
        method: 'post',
        url: '/admin/addMenu',
        data: {
            ...data
        }
    })
}

export const delMenu = (id) => {
    return request({
        method: 'get',
        url: '/admin/delMenu',
        params: {
            id: id
        }
    })
}