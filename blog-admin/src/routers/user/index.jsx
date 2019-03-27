import React from 'react'
import { Route } from 'react-router-dom'
import UserSet from '../../views/user/index'
export default class UserRouter extends React.Component {
    render() {
        return(
            <Route path="/user" component={UserSet} />
        )
    }
}