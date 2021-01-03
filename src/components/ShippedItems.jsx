import React from 'react'
import ShippedItem from './ShippedItem'

const ShippedItems = ({ state, dispatch }) => {
    return (
        <>
            <h4>出荷済み一覧</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>商品名</th>
                        <th scope='col'>操作時間</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {state.items.map((item, index) => {
                        if(item.shipmentflag === 'shipment'){
                            return(
                                <ShippedItem key={ index } shippeditem={ item.shippeditem } id={ item.shippedid } time={ item.shipmentTime } dispatch={ dispatch }/>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ShippedItems
