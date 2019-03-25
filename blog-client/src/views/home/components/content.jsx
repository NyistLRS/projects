import React,{ Component } from 'react'

export default class MyContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            banner: require('../../../assets/images/banner.png')
        }
    }
    render() {
        return(
            <div className="conetnt">
                <div className="content-left">
                    <div className="banner">
                        <img src={this.state.banner} alt=""/>
                        <div className="banner-summry">
                            <span>超脱自然的生活，和有趣的人一起浪费生命，是很浪漫的事情！~</span>
                        </div>
                    </div>
                    <div className="article-list">
                        <div className="title">最新发布</div>
                        <div className="artile-conetnt">
                            <div className="article-item">
                                <div className="article-item-content">
                                    <div className="article-item-summary">
                                        <h3>用Javascript评估用户输入密码的强度实现代码</h3>
                                        <div className="article-detail">
                                        　　今天小编就来简单介绍一下js中的三种弹出对话框，小编先单独对这几个方法进行详细讲解， 接着，将这几个方法进行对比，好了，开始我们的js之旅吧
                                        </div>
                                    </div>
                                    <div className="article-img">
                                        <img src="./images/1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="article-message">
                                    <span>作者:LRS</span>
                                    <span>赞:(20)</span>
                                    <span>评论:(2)</span>
                                    <span>分类:javscript</span>
                                    <span>2018-2-22</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="content-right">
                <div className="user-info">
                    <div className="title">个人名片</div>
                    <div className="uer-info-content">

                    </div>
                </div>
                <div className="search">
                    <div className="title">查询</div>
                    <div className="search-content">
                        <div className="input">
                            <input type="text" placeholder="请输入关键字"/>
                        </div>
                        <div className="btn">
                            <button type="button">搜索</button>
                        </div>
                    </div>
                </div>
                <div className="calendar">
                    <div className="title">日历</div>
                    <div className="calendar-content"></div>
                </div>
                <div className="recommend">
                    <div className="title">推荐列表</div>
                    <div className="recommend-list"></div>
                </div>
                <div className="filter">
                    <div className="title">筛选</div>
                    <div className="filter-content"></div>
                </div>
                <div className="count">
                    <div className="title">统计</div>
                    <div className="count-content"></div>
                </div>
            </div>
        </div>
        )
    }
}