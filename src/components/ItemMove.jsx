import React, { useState } from 'react'


import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS,
}from '../actions/index'

import { timeCurrentIso8601 } from '../utils'

const ItemMove = ({ dispatch }) => {
    const [ item, setItem ] = useState('')

    const shipmentItem = e => {
        e.preventDefault()
        dispatch({
            type: SHIPMENT_ITEM,
            item,
            flag: 'shipment'
        })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: `${ item }を出荷しました`,
            operatedAt: timeCurrentIso8601()
        })
        setItem('')
    }

    const inStockItem = e => {
        e.preventDefault()
        dispatch({
            type: INSTOCK_ITEM,
            item,
            flag: 'instock'
        })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: `${ item }を入荷しました`,
            operatedAt: timeCurrentIso8601()
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
