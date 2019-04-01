import React from 'react'
import { Layout,Menu,Icon } from 'antd'
import { Link } from 'react-router-dom'
import { getMenus } from '../../../api/menu/index'
const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu
export default class SlideNav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            route: '',
            menus: [],
            menusHtml: ''
        }
    }
    handleClick({item, key, keyPath}) {
        console.log(item, key, keyPath)
        console.log(this.props)
        this.setState({
            route: `/${key}`
        })
        // window.location.pathname = this.state.route
        console.log(window.location)
    }
    componentWillMount() { // 请求数据库的数据
        getMenus().then(res => {
            this.setState({
                menus: res.data
            })
            this.getHtml(res.data)
        })
    }
    getHtml(menus) {
        let html = menus.map(res => {
            if(res.children.length === 0){
                return <Menu.Item key={res.id}><Link to={res.pathname}><Icon type={res.icon} /><span>{res.title}</span></Link></Menu.Item>
            } else {
                return <SubMenu key={res.id} title={<span><Icon type={res.icon} /><span>{res.title}</span></span>} >
                    {this.getHtml(res.children)}
                </SubMenu>
            }
        })
        this.setState({
            menusHtml : html
        })
        return html
    }
    render() {
        return(
            <Sider collapsible collapsed={this.props.collapsed} trigger={null} >
                <div className="logo" ></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} onClick={this.handleClick.bind(this)} mode="inline">
                    {/* {
                        this.state.menus.map((res) =>
                            <Menu.Item key={res.id}>
                                <Link to={res.pathname}>
                                    <Icon type={res.icon} />
                                    <span>{res.title}</span>
                                </Link>
                            </Menu.Item>
                        )
                    } */}
                    {this.state.menusHtml}
                    {/* <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/menu">
                            <Icon type="appstore" />
                            <span>菜单管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="setting" /><span>系统设置</span></span>}
                    >
                        <Menu.Item key="3">主题设置</Menu.Item>
                        <Menu.Item key="4">权限配置</Menu.Item>
                        <Menu.Item key="5">日志管理</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user">
                        <Link to="/user">
                            <Icon type="file" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item> */}
                </Menu>
            </Sider>
        )
    }
}

