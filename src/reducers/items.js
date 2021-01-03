import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    CANCEL_STOCKITEM,
    CANCEL_SHIPPEDITEM,
    ALL_MOVE_CANCEL,
} from '../actions/index'

import { timeCurrentIso8601 } from '../utils'

const items = ( state=[], action ) => {
    switch( action.type ){
        case SHIPMENT_ITEM:
            const shippeditem = { shippeditem: action.item }
            const shipmentflag = action.flag
            const shippedlength = state.length
            const shippedid = shippedlength === 0 ? 1 :shippedlength + 1
            const shipmentTime = timeCurrentIso8601()
            return [ ...state, { shippedid, ...shippeditem, shipmentflag, shipmentTime }]

        case INSTOCK_ITEM:
            const stockitem = { stockitem: action.item }
            const instockflag = action.flag
            const stocklength = state.length
            const stockid = stocklength === 0 ? 1 : stocklength + 1
            const stockTime = timeCurrentIso8601()
            return [ ...state, { stockid, ...stockitem, instockflag, stockTime }]

        case CANCEL_STOCKITEM:
            return state.filter( item => item.stockid !== action.id )

        case CANCEL_SHIPPEDITEM:
            return state.filter( item => item.shippedid !== action.id )

        case ALL_MOVE_CANCEL:
            return []

        default:
            return state
    }
}

export default items