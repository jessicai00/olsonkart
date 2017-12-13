import React, { Component } from 'react'
import HotTable from 'react-handsontable'
import { Button } from 'antd';

class CartTable extends Component {    
    handleClick = () => {
        var hot = document.getElementById("hot")
        var a = hot.getData()
        console.log(a)
    }

    render() {
        const { data } = this.props

        return (
            <div>
                {data.length === 0 ?
                <span>Cart Empty</span>
                :
                <div>
                <Button onClick={this.handleClick}>button</Button>
                <HotTable 
                    root="hot" 
                    settings={{
                        data: data,
                        colHeaders: ["Name", "Price", "Quantity"],
                        width: 490,
                        height: 150,
                        stretchH: 'all'
                    }}
                />
                </div>}
                
            </div>
        )
    }
}

export default CartTable
