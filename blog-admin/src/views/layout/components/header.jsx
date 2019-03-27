import React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout
export default class MyHeader extends React.Component {
    state = {
        collapsed: false
    }
    toggle = () => {
        debugger
        this.setState({
            collapsed: !this.state.collapsed,
        })
        console.log(this.props)
        this.props.handleStatus(!this.state.collapsed)
    }
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </Header>
        )
    }
}