import React from 'react'
import { Layout,Menu,Icon } from 'antd'
const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu
export default class SlideNav extends React.Component {
    render() {
        return(
            <Sider
                collapsible
                collapsed={this.props.collapsed}
                trigger={null}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="appstore" />
                        <span>菜单管理</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="setting" /><span>系统设置</span></span>}
                    >
                        <Menu.Item key="3">主题设置</Menu.Item>
                        <Menu.Item key="4">权限配置</Menu.Item>
                        <Menu.Item key="5">日志管理</Menu.Item>
                    </SubMenu>
                    {/* <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu> */}
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>用户管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

