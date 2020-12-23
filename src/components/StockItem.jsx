import React from 'react'
import { CANSEL_STOCKITEM } from '../actions/index'


const StockItem = ({ stockitem, dispatch }) => {
    const id = stockitem.stockid
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${id}の商品の移動をキャンセルしますか？`)
        if( result )dispatch({ type: CANSEL_STOCKITEM, id })
    }
    console.log(stockitem)
    return (
        <>
            <tr>
                <td>{stockitem.stockitem}</td>    
                <td></td>    
                <td><button onClick={ handleClickDeleteButton }>キャンセル</button></td>
            </tr>  
        </>
    )
}

export default StockItem
