import React from 'react'
import { CANCEL_SHIPPEDITEM } from '../actions/index'


const ShippedItem = ({ shippeditem, id, time, dispatch }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANCEL_SHIPPEDITEM, id })
    }
    return (
        <>
            <tr>
                <td>{ id }</td>
                <td>{ shippeditem }</td>
                <td>{ time }</td>
                <td><button type="button" className="btn btn-outline-warning" onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default ShippedItem
