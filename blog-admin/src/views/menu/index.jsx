import React from 'react'
import { Input, Button, Table, Icon, Modal,Form  } from 'antd'
import { getMenuInfo, setMenuInfo, addMenu } from '../../api/menu/index'
import "./index.scss"
const Search  = Input.Search
const EditModal = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, confirmLoading, form, inputChange, editData } = props
        const { selectIcon,selectMenuName,selectPathName} = editData
        const { getFieldDecorator } = form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
        return(
            <Modal title="修改"
                visible={visible}
                onOk={onCreate}
                confirmLoading={confirmLoading}
                onCancel={onCancel}
                inputChange={inputChange}
                width="360px"
                okText="确定"
                cancelText="取消"
                centered
            >
                <Form.Item
                    label="菜单名称"
                    hasFeedback
                    {...formItemLayout}
                >
                    {getFieldDecorator('menuName', {
                        initialValue: selectMenuName,
                        rules: [{
                            required: true, message: '菜单名称不能为空！',
                        }],
                    })(
                        <Input onChange={(input) => inputChange('selectMenuName', input)}/>
                    )}
                </Form.Item>
                <Form.Item
                    label="菜单路由"
                    hasFeedback
                    {...formItemLayout}
                >
                    {getFieldDecorator('menuRouter', {
                        initialValue: selectPathName,
                        rules: [{
                            required: true, message: '菜单路由不能为空！',
                        }],
                    })(
                        <Input onChange={(input) => inputChange('selectPathName', input)}/>
                    )}
                </Form.Item>
                <Form.Item
                    label="菜单图标"
                    hasFeedback
                    {...formItemLayout}
                >
                    {getFieldDecorator('menuIcon', {
                        initialValue: selectIcon,
                        rules: [{
                            required: false, message: '菜单名称不能为空！',
                        }],
                    })(
                        <Input onChange={(input) => inputChange('selectIcon', input)}/>
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
        visible: false,
        selectId: '',
        selectMenuName: '',
        selectPathName: '',
        selectIcon: ''
    }
    componentWillMount() {
        this.getTableData()
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
                render: (res) => (
                    <span>
                        <span style={{ marginRight: 10, color: '#1890ff',cursor: 'pointer'}} onClick={() => this.actionBtn(0,res)}>
                            <Icon type="edit" />
                        </span>
                        <span style={{ marginRight: 10, color: '#1890ff', cursor: 'pointer' }} onClick={() => this.actionBtn(1)}>
                            <Icon type="delete" />
                        </span>
                    </span>
                )
            }
        ]
        return (
            <div className="menu-list">
                <div className="tool-bar">
                    <Button type="primary" onClick={this.addMenu.bind(this)}>新增菜单</Button>
                    <Search
                        placeholder="请输入菜单名称或者菜单路径"
                        style={{ width: 260,marginRight: 20,marginLeft: 20 }}
                        onSearch={value => console.log(value)}
                    />
                    <Button type="primary">搜索</Button>
                </div>
                <div className="table-content">
                    <Table columns={columns} dataSource={this.state.data} bordered rowKey="id" />
                </div>
                <EditModal
                    visible={this.state.visible}
                    editData={this.state}
                    onCancel={this.handleCancel.bind(this)}
                    onCreate={this.handleOk.bind(this)}
                    inputChange={this.inputChange.bind(this)}
                    confirmLoading={this.state.confirmLoading}
                ></EditModal>
            </div>
        )
    }
    
    actionBtn(val,row) {
        if(!val) {
            this.setState({
                visible: true,
                selectId: row.id,
                selectMenuName: row.title,
                selectIcon: row.icon,
                selectPathName: row.pathname
            })
        }
        console.log(val)
    }
    getTableData() {
        getMenuInfo().then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    addMenu() {
        this.setState({
            visible: true,
            selectId: '',
            selectPathName: '',
            selectMenuName: '',
            selectIcon: '',
        })
    }
    inputChange(name,e) {
        let val = e.target.value
        switch(name){
            case 'selectIcon':
                this.setState({
                    'selectIcon': val
                })
                break
            case 'selectMenuName':
                this.setState({
                    'selectMenuName': val
                })
                break
            case 'selectPathName':
                this.setState({
                    'selectPathName': val
                })
                break
            default:
                return false
        }
        
        console.log(this.state[name])
    }
    handleOk() {
        setMenuInfo({ // 编辑操作
            id: this.state.selectId,
            menuName: this.state.selectMenuName,
            pathName: this.state.selectPathName,
            icon: this.state.selectIcon
        }).then(res => { // 修改菜单信息
            console.log(res)
            if(!res.result){
                return
            }
            this.setState({
                visible: false,
                selectId: ''
            })
            this.getTableData()
        })
        addMenu({ // 新增操作
            menuName: this.state.selectMenuName,
            pathName: this.state.selectPathName,
            icon: this.state.selectIcon
        }).then(res => {

        })
    }
    handleCancel() {
        this.setState({
            visible: false,
            selectId: ''
        })
    }
}