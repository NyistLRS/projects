import React from 'react'
import { Layout } from 'antd'
import RouterView from '../../../routers'
const { Content } = Layout

export default class AppMain extends React.Component {
    render() {
        return(
            <Content style={{ margin: '0 16px',padding: '10px 0' }}>
                <div style={{ minHeight: '100%' }}>
                    <RouterView/>
                </div>
            </Content>
        )
    }
}