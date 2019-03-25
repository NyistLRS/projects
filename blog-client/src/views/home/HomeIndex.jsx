import React from 'react'
import './HomeIndex.scss'
import MyHeader from './components/header'
import MyContent from './components/content'

export default class HomeIndex extends React.Component {
    render() {
        return(
            <div className="app">
                <MyHeader></MyHeader>
                <MyContent></MyContent>
            </div>
        )
    }
}