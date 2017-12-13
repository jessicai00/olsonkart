import React, { Component } from 'react'
import HotTable from 'react-handsontable'

class CartTable extends Component {    
    render() {
        const { data } = this.props

        return (
            <div>
                {data.length === 0 ?
                <span>Cart Empty</span>
                :
                <HotTable 
                    root="hot" 
                    settings={{
                        data: data,
                        colHeaders: ["Name", "Price", "Quantity"],
                        width: 490,
                        height: 150,
                        stretchH: 'all'
                    }}
                />}
            </div>
        )
    }
}

export default CartTable
