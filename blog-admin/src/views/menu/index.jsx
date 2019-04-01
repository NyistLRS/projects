import React from 'react'
import { Input, Button, Table, Icon, Modal,Form  } from 'antd'
import { getMenuInfo } from '../../api/menu/index'
import "./index.scss"
const Search  = Input.Search
const EditModal = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, confirmLoading, form } = props
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        }
        return(
            <Modal title="修改"
                visible={visible}
                onOk={onCreate}
                confirmLoading={confirmLoading}
                onCancel={onCancel}
                okText="确定"
                cancelText="取消"
                centered
            >
                <Form.Item
                    label="菜单名称"
                    hasFeedback
                    {...formItemLayout}
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true, message: '菜单名称不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
            </Modal>
        )
    }
)
export default class MenuManager extends React.Component {
    state ={
        data: [],
        confirmLoading: false,
        visible: false
    }
    componentWillMount() {
        getMenuInfo().then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        let columns = [
            {
                title: '菜单ID',
                dataIndex: 'id'
            },{
                title: '菜单名称',
                dataIndex: 'title'
            },{
                title: '菜单图标',
                dataIndex: 'icon'
            }, {
                title: '菜单路径',
                dataIndex: 'pathname'
            },{
                title: '父菜单ID',
                dataIndex: 'parentId'
            },{
                title: '操作',
                dataIndex: '',
                render: () => (
                    <span>
                        <span style={{ marginRight: 10, color: '#1890ff',cursor: 'pointer'}} onClick={() => this.actionBtn(0)}>
                            <Icon type="edit" />
                        </span>
                        <span style={{ marginRight: 10, color: '#1890ff', cursor: 'pointer' }} onClick={() => this.actionBtn(1)}>
                            <Icon type="delete" />
                        </span>
                    </span>
                )
            }
        ]
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        }
        return (
            <div className="menu-list">
                <div className="tool-bar">
                    <Search
                        placeholder="请输入菜单名称或者菜单路径"
                        style={{ width: 260,marginRight: 20 }}
                        onSearch={value => console.log(value)}
                    />
                    <Button type="primary">搜索</Button>
                </div>
                <div className="table-content">
                    <Table columns={columns} dataSource={this.state.data} bordered rowKey="id" />
                </div>
                <EditModal
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    onCreate={this.handleOk.bind(this)}
                    confirmLoading={this.state.confirmLoading}
                ></EditModal>
            </div>
        )
    }
    
    actionBtn(val) {
        if(!val) {
            this.setState({
                visible: true
            })
        }
        console.log(val)
    }
    handleOk() {
        this.setState({
            visible: false
        })
    }
    handleCancel() {
        this.setState({
            visible: false
        })
    }
}