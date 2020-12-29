import React from 'react'
import { CANCEL_SHIPPEDITEM } from '../actions/index'


const ShippedItem = ({ shippeditem, id, dispatch }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANCEL_SHIPPEDITEM, id })
    }
    return (
        <>
            <tr>
                <td>{ id }</td>
                <td>{ shippeditem }</td>
                <td></td>
                <td><button type="button" class="btn btn-outline-warning" onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default ShippedItem
