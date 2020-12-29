import React from 'react'
import { CANSEL_SHIPPEDITEM } from '../actions/index'


const ShippedItem = ({ shippeditem, dispatch }) => {
    const id = shippeditem.shippedid
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANSEL_SHIPPEDITEM, id })
    }
    return (
        <>
            <tr>
                <td>{ shippeditem }</td>    
                <td></td>    
                <td><button onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default ShippedItem
