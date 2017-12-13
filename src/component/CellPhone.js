import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd'

import './CellPhone.css'

class CellPhone extends Component {
    handleAddToCartClick = () => {
        this.props.onAdd(this.props.name, this.props.price)
    }

    render() {
        return (
            <div>
                <Card className="CellPhone-Card">
                    <img className="CellPhone-Img" alt="phone" src={this.props.imgurl} />    
                    <div className="CellPhone-Detail">
                        <p className="CellPhone-Name-Font">{this.props.name}</p>
                        <p>{this.props.description.substr(0, 50) + (this.props.description.length > 50 ? '...' : '')}</p>
                    </div> 
                    <hr className="CellPhone-Hr" />
                    <Row>
                        <Col span={12}>
                            <Button type="primary" ghost style={{"cursor": "text"}}>{'$' + this.props.price}</Button>
                        </Col>
                        <Col span={12}>
                            <Button type="danger" ghost onClick={this.handleAddToCartClick}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default CellPhone
