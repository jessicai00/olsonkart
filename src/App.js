import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import ProductList from './component/ProductList'
import Login from './component/Login'

import './App.css'

const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
        <HashRouter>        
          <Layout>
            <Header className="Header">
              <AppHeader />
            </Header>
            <Content className="Content">
              <Route exact path="/" component={ProductList}/>
              <Route path="/login" component={Login}/>
            </Content>
            <Footer className="Footer">
              <AppFooter />
            </Footer>
          </Layout>        
        </HashRouter>
    )
  }
}

export default App
