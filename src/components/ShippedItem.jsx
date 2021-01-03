import React from 'react'
import { 
    CANCEL_SHIPPEDITEM,
    ADD_OPERATION_LOG
} from '../actions/index'

import { timeCurrentIso8601 } from '../utils'

const ShippedItem = ({ shippeditem, id, time, dispatch }) => {
    const handleClickDeleteButton = () => {
        const result = window.confirm(`${ shippeditem }の移動をキャンセルしますか？`)
        if( result ){
            dispatch({ type: CANCEL_SHIPPEDITEM, id })
            dispatch({ 
                type: ADD_OPERATION_LOG,
                description: `${ shippeditem }の出荷処理をキャンセルしました`,
                operatedAt: timeCurrentIso8601()
            })
        }
            
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
