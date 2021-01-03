import React from 'react'
import { CANCEL_STOCKITEM } from '../actions/index'


const StockItem = ({ stockitem, id, time, dispatch, }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANCEL_STOCKITEM, id })
    }
    return (
        <>
            <tr>
                <td>{ id }</td>    
                <td>{ stockitem }</td>
                <td>{ time }</td>
                <td><button type="button" className="btn btn-outline-warning" onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default StockItem
