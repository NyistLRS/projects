import React, { Component } from 'react'

export default class Myheader extends Component {
    render() {
        return(
            <div className="header">
                <div className="logo"></div>
                <div className="nav">
                    <div className="nav-item active">
                        <span>首页</span>
                    </div>
                    <div className="nav-item">
                        <span>作品</span>
                    </div>
                    <div className="nav-item">
                        <span>技能</span>
                    </div>
                    <div className="nav-item">
                        <span>特长</span>
                    </div>
                    <div className="nav-item">
                        <span>关于我</span>
                    </div>
                </div>
            </div>
        )
    }
}