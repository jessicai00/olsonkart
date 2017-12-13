import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Popover } from 'antd'
import { MdKeyboardArrowDown } from 'react-icons/lib/md'

import './AppHeader.css'

class AppHeader extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLogin: false
    }
  }
  
  componentWillMount() {
    let token = localStorage.getItem('token')
    this.setState({
      isLogin: !(token === null)
    })
  }
  
  handleLoginLogoutClick = () => {
    //this.props.history.push('/login')
    localStorage.clear()
    this.setState({
      isLogin: false
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={3}>
          </Col>
          <Col span={2}>
            <label id="top" className="AppHeader-Title">OlsonKart</label>
          </Col>
          <Col span={2}>
          </Col>
          <Col span={11}>
            <Popover>
              <label className="AppHeader-Menu-Label">Home</label>             
              <MdKeyboardArrowDown className="AppHeader-Menu" />
            </Popover>
            <Popover>
              <label className="AppHeader-Menu-Label">Account</label>             
              <MdKeyboardArrowDown className="AppHeader-Menu" />
            </Popover>
            <Popover>
              <label className="AppHeader-Menu-Label">Pages</label>             
              <MdKeyboardArrowDown className="AppHeader-Menu" />
            </Popover>
            <Popover>
              <label className="AppHeader-Menu-Label">Computers</label>             
              <MdKeyboardArrowDown className="AppHeader-Menu" />
            </Popover>
            <Popover>
              <label className="AppHeader-Menu-Label">Contact</label>             
            </Popover>
          </Col>
          <Col span={3}>            
							<Link className="kart-links" to="/login" onClick={this.handleLoginLogoutClick}>{this.state.isLogin? 'Logout': 'Login'}</Link> 
							<a className="kart-links">Signup</a>	
          </Col>
        </Row>
      </div>
    )
  }
}

export default AppHeader
