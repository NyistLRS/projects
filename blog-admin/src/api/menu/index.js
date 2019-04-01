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