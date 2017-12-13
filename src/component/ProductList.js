import React, { Component } from 'react'
import { Button } from 'antd'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import CellPhone from './CellPhone'
import CartModel from './CartModel'
import './ProductList.css'

class ProductList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showCart: false,
            productList: [],
            productItems: new Map(),
            cart: [],
        }
    }
    
    componentDidMount() {
        this.getProductList()
    }

    getProductList() {
        const token = localStorage.getItem('token')
        if (token) {
            axios({
                method: 'get',
                url: 'https://pwcfrontendtest.azurewebsites.net/getlist',
                headers: { RequestVerificationToken: token }
            })
            .then(res => {
                console.log(res.data.res)
                this.setState({
                    productList: res.data.res
                })
            })
        }
    }

    handleCartModelToggle = () => {
        this.setState({
            showCart: !this.state.showCart
        })
    }

    handleAdd = (name, price) => {
        const { productItems, cart } = this.state

        // if (productItems.has(name)) {
        //     const one = cart.filter(entry => entry.name === name)[0]
        //     one.qty++
        // }
        // else {
        //     productItems.set(name, price)
        //     cart.push(product)
        // }
        const one = cart.find(entry => entry.name === name)
        if (one) {
            one.qty++
        }
        else {
            cart.push({
                name: name,
                price: price,
                qty: 1
            })
        } 

        this.setState({
            cart: cart
        })             
    }    

    render() {
        const { cart } = this.state

        let sum = 0
        cart.map(entry => (
            sum += entry.price * entry.qty
        ))
        let cartText = cart.length + " Items - $" + sum

        return (
            <div>
                {localStorage.getItem('token') === null ? 
                <Redirect to="/login" />
                :
                <div> 
                    <div className="ProductList-Title">
                        <label className="ProductList-Title-Font">It's Lorem ipsum dolor sit amet consectetur</label>                        
                    </div>
                    <div className="ProductList-Cart-Container">
                        <div className="ProductList-Cart">
                            <Button type="primary" icon="shopping-cart" onClick={this.handleCartModelToggle}>
                                {cart.length > 0 && cartText}
                            </Button>
                        </div>
                    </div>
                    <div className="ProductList-Container">
                        {this.state.productList.map((entry, index) => (                                  
                            <CellPhone 
                                key={index} 
                                imgurl={entry.imgurl} 
                                name={entry.name} 
                                description={entry.description}    
                                price={entry.price}
                                onAdd={this.handleAdd}
                            />             
                        ))}
                    </div>
                    <CartModel
                        visible={this.state.showCart}
                        data={this.state.cart}
                        onCancel={this.handleCartModelToggle}
                    />
                </div>}
            </div>
        )
    }
}

export default ProductList
