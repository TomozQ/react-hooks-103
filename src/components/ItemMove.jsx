import React, { useState } from 'react'


import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS,
    ALL_MOVE_CANCEL,
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

    const cancelOperation = e => {
        e.preventDefault()
        const opeResult = window.confirm('全ての操作をキャンセルしてもよいですか？')
        if(opeResult){
            dispatch({ type: ALL_MOVE_CANCEL })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: '全ての操作をキャンセルしました',
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    const cancelLogs = e => {
        e.preventDefault()
        const result = window.confirm('全ての操作ログを削除してもよいですか？')
        if(result)dispatch({ type: DELETE_ALL_OPERATION_LOGS })
    }

    return (
        <>
            <h4>在庫移動</h4>
            <div className='form-group'>
                <form>
                    <label>商品</label>
                    <input className='form-control' value={ item } onChange={ e => setItem( e.target.value )}/>
                </form>
                <button className='btn btn-primary' onClick={ shipmentItem }>出荷</button>
                <button className='btn btn-success' onClick={ inStockItem }>入荷</button>
            </div>
            <button className='btn btn-outline-danger' onClick={ cancelOperation }>全ての操作をキャンセルする</button>
            <button className='btn btn-outline-danger' onClick={ cancelLogs }>全ての操作ログを削除する</button>
        </>
    )
}

export default ItemMove
