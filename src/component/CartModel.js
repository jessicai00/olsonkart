import React, { Component } from 'react'
import { Modal } from 'antd'

import CartTable from './CartTable'

class CartModel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps

        this.setState({
            data: data
        })
    }

    render() {
        const { data } = this.state

        let sum = 0
        data.map(entry => (
            sum += entry.price * entry.qty
        ))

        return (
            <Modal
                title="Shopping Cart"
                visible={this.props.visible}
                okText="Checkout" 
                cancelText="Continue Shopping"                
                onCancel={this.props.onCancel}
            >
                <div style={{marginBottom: 10}}>
                    <CartTable data={data} />
                    {data.length > 0 &&
                    <label style={{float: "right"}}>
                        Total: {sum}
                    </label>}
                </div>
            </Modal>
        )
    }
}

export default CartModel
