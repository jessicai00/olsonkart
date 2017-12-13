import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Checkbox, Button, message } from 'antd'
import axios from 'axios'

import './Login.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isLogin: false
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSignInClick = () => {
        axios({
            method: "post",
            url: 'https://pwcfrontendtest.azurewebsites.net/login',
            data: {
                username: this.state.email,
                psd: this.state.password,            
            }
        })
        .then(res => {
            console.log("login", res)
            if (res.data.status === "success") {
                localStorage.setItem("token", res.data.token)   
                this.setState({
                    isLogin: true
                })          
            }
            else {
                message.error(res.data.status)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleResetClick = () => {
        this.setState({
            email: "",
            password: "",
        })
    }

    render() {        
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <img className="Image" alt="girl" width="100%" src="http://ashobiz.dreamhosters.com/wrapbootstrap/olsonkart275/img/slider/rs-1.jpg" />                            
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className="Login-Left">
                        <Row>
                            <label className="Login-Title">Login to Access Amazing Benefits </label>
                            <label className="Login-Title-Blue">!!!</label>
                        </Row>
                        <Row>
                            <img className="Image" alt="girl" width="100%" src="http://ashobiz.dreamhosters.com/wrapbootstrap/olsonkart275/img/back1.jpg" />    
                        </Row>
                        <Row>
                            <label>
                                Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.
                            </label>
                        </Row>
                    </Col>
                    <Col span={12} className="Login-Right">
                        <div className="LoginForm-Outter">
                            <div className="LoginForm-Inner">
                                <Row>
                                    <label className="LoginForm-Title">
                                        Login
                                    </label>
                                </Row>
                                <Row>                       
                                    <hr className="LoginForm-Hr" />
                                </Row>
                                <Row className="LoginForm-Item">
                                    <Col span={4} className="LoginForm-Text-Col">
                                        <label className="LoginForm-Text">
                                            Email
                                        </label>
                                    </Col>
                                    <Col span={20}>
                                        <Input 
                                            size="large" 
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </Col>
                                </Row>
                                <Row className="LoginForm-Item">
                                    <Col span={4} className="LoginForm-Text-Col">
                                        <label className="LoginForm-Text">
                                            Password
                                        </label>
                                    </Col>
                                    <Col span={20}>
                                    <Input 
                                        type="password" 
                                        size="large" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange} />
                                    </Col>
                                </Row>
                                <Row className="LoginForm-Item">
                                    <Col span={4}>                            
                                    </Col>
                                    <Col span={20}>
                                        <Checkbox>
                                            Remember me
                                        </Checkbox>
                                    </Col>
                                </Row>
                                <Row className="LoginForm-Item">
                                    <Col span={4}>
                                    </Col>
                                    <Col span={20}>
                                        <Button style={{marginRight: 5}} type="primary" onClick={this.handleSignInClick}>
                                            Sign in
                                        </Button>
                                        <Button onClick={this.handleResetClick}>
                                            Reset
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row> 
                {this.state.isLogin && <Redirect to="/#top" />}
            </div>
        )
    }
}

export default LoginForm
