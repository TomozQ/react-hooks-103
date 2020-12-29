import React from 'react'
import { CANCEL_STOCKITEM } from '../actions/index'


const StockItem = ({ stockitem, id, dispatch, }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANCEL_STOCKITEM, id })
    }
    return (
        <>
            <tr>
                <td>{ stockitem }</td>
                <td></td>    
                <td><button onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default StockItem
