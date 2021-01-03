import React from 'react'
import { 
    CANCEL_STOCKITEM,
    ADD_OPERATION_LOG
 } from '../actions/index'
import { timeCurrentIso8601 } from '../utils'


const StockItem = ({ stockitem, id, time, dispatch, }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${ stockitem }の移動をキャンセルしますか？`)
        if( result ){
            dispatch({ type: CANCEL_STOCKITEM, id })
            dispatch({
                type: ADD_OPERATION_LOG,
                description: `${ stockitem }の入荷処理をキャンセルしました`,
                operatedAt: timeCurrentIso8601()
            })
        }
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
