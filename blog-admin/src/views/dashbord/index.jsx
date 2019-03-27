import React from 'react'
import { Row, Col } from 'antd'
import "./index.scss"
export default class DashBoard extends React.Component {
    render() {
        return(
            <div>
                <Row gutter={10}>
                    <Col className="gutter-row"  xs={{span:12}} lg={{span:6}}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 6 }}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
            </div>
        )
    }
}