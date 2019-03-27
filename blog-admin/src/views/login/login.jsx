import React from 'react'
import './login.scss'
// import { login } from '../../api/login/index'
import { Redirect } from 'react-router-dom'

export default class LoginIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: null,
            userName: '',
            psw: '',
            isShow: 'none',
            loginSu: false
        }
    }
    blur() {
        this.setState({
            active: null
        })
    }
    hanldClidk() {
        if(this.state.userName === '') {
            this.userNameInput.focus()
        }
        if (this.state.psw === '') {
            this.pswInput.focus()
        }
        this.setState({
            loginSu: true
        })
        // login(this.state.userName, this.state.psw).then(res => {
        //     if(!res.code) {
        //         this.setState({
        //             isShow: 'inline-block'
        //         })
        //     }else{
        //         localStorage.setItem('__config_center_token', res.token)
        //         this.setState({
        //             isShow: 'none'
        //         })
        //         this.setState({ 
        //             loginSu: true
        //         })
        //     }
        // })
    }
    handlerChange(event,type) {
        if(!type) {
            this.setState({
                userName: event.target.value
            })
        }else{
            this.setState({
                psw: event.target.value
            })
        }
    }
    render() {
        if(this.state.loginSu) {
            return <Redirect to={{pathname: '/'}}></Redirect>
        }
        return (
            <div className="login">
                <div className="login-box">
                    <div className={`input-item ${this.state.active==='userName'?'active':''}`}>
                        <input 
                        ref={(input) => this.userNameInput = input} 
                        value={this.state.userName} type="text" 
                        onFocus={() => { this.setState({ active: 'userName',isShow: 'none' }) }} 
                        placeholder="请输入登录名" 
                        onChange={(event) => { this.handlerChange(event,0) }}
                        onBlur={() => {this.blur()}}></input>
                    </div>
                    <div className={`input-item ${this.state.active === 'psw' ? 'active' : ''}`}>
                        <input 
                        ref={(input) => this.pswInput = input} 
                        value={this.state.psw} type="password" 
                        onFocus={() => {this.setState({active: 'psw',isShow: 'none' })}} 
                        placeholder="请输入密码" 
                        onChange={(event) => {this.handlerChange(event,1)}}
                        onBlur={this.blur.bind(this)}></input>
                    </div>
                    <div className="btn" onClick={() => {this.hanldClidk()}}>
                        <span>登录</span>
                    </div>
                    <span style={{'color':'red',display: this.state.isShow}}>登录失败!</span>
                </div>
            </div>
        )
    }
}