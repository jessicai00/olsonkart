import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

import './AppFooter.css'

class AppFooter extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={3}>
                    </Col>
                    <Col span={6}>
                        <label className="AppFooter-Title">Oslon de</label>
                        <label className="AppFooter-Title-Blue">' </label>
                        <label className="AppFooter-Title">Techno</label>
                    </Col>
                    <Col span={6}>
                        <label className="AppFooter-Title">
                            Categories
                        </label>
                    </Col>
                    <Col span={6}>
                        <label className="AppFooter-Title">
                            Get In Touch
                        </label>
                    </Col>
                </Row>
                <Row  className="AppFooter-Text-Area">
                    <Col span={3}>
                    </Col>
                    <Col span={6}>
                        <label className="AppFooter-Text">
                            Duis leo risus, vehicula luctus nunc. Quiue rhoncus, a sodales enim arcu quis turpis. Duis leo risus, condimentum ut posuere ac, vehicula luctus nunc. Quisque rhoncus, a sodales enim arcu quis turpis.
                        </label>
                    </Col>
                    <Col span={6}>
                        <a className="AppFooter-Text-Link" href="#top">
                            Sed eu leo orci, condimentum gravida metus
                        </a>
                        <a className="AppFooter-Text-Link" href="#top">
                            Etiam at nulla ipsum, in rhoncus purus
                        </a>
                        <a className="AppFooter-Text-Link" href="#top">
                            Fusce vel magna faucibus felis dapibus facilisis
                        </a>
                        <a className="AppFooter-Text-Link" href="#top">
                        Vivamus scelerisque dui in massa
                        </a>
                        <a className="AppFooter-Text-Link" href="#top">
                            Pellentesque eget adipiscing dui semper
                        </a>
                    </Col>
                    <Col span={6}>
                        <Row className="AppFooter-Contact">
                            <Col span={3}>
                                <Button className="AppFooter-Icon" type="primary" shape="circle" icon="home" />
                            </Col>
                            <Col span={21}>
                                <label className="AppFooter-Text">
                                    #12, Plot No.14, Raj Karmara Street, 5th Stage, Koramangala, Madiwala, Bangalore - 493922, Karananana.
                                </label>
                            </Col>
                        </Row>
                        <Row className="AppFooter-Contact">
                            <Col span={3}>
                                <Button className="AppFooter-Icon" type="primary" shape="circle" icon="phone" />
                            </Col>
                            <Col span={21}>
                                <label className="AppFooter-Text">+94-948-323-5532</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3}>
                                <Button className="AppFooter-Icon" type="primary" shape="circle" icon="mail" />
                            </Col>
                            <Col span={21}>
                                <label className="AppFooter-Text">some.thing@gmail.com</label>
                            </Col>
                        </Row>
                    </Col>
                </Row>                             
            </div>
        )
    }
}

export default AppFooter
