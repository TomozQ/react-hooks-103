import React, { useReducer, useState } from 'react'
import reducer from '../reducers/index'
import AppContext from '../contexts/AppContext'

import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
}from '../actions/index'

const ItemMove = ({ state, dispatch }) => {
    const [ item, setItem ] = useState('')

    const shipmentItem = e => {
        e.preventDefault()
        dispatch({
            type: SHIPMENT_ITEM,
            item,
        })
        setItem('')
    }

    const inStockItem = e => {
        e.preventDefault()
        dispatch({
            type: INSTOCK_ITEM,
            item,
        })
        setItem('')
    }

    return (
        <>
            <h4>在庫移動</h4>
            <div className='form-group'>
                <form>
                    <label>商品</label>
                    <input className='form-control' value={ item } onChange={ e => setItem( e.target.value )}/>
                </form>
                <button className='btn btn-danger' onClick={ shipmentItem }>出荷</button>
                <button className='btn btn-success' onClick={ inStockItem }>入荷</button>
            </div>
        </>
    )
}

export default ItemMove
