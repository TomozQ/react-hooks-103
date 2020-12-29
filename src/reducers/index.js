import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    CANCEL_STOCKITEM,
    CANCEL_SHIPPEDITEM,
} from '../actions/index'

const items = ( state=[], action ) => {
    switch( action.type ){
        case SHIPMENT_ITEM:
            const shippeditem = { shippeditem: action.item }
            const shipmentflag = action.flag
            const shippedlength = state.length
            const shippedid = shippedlength === 0 ? 1 :shippedlength + 1
            return [ ...state, { shippedid, ...shippeditem, shipmentflag }]

        case INSTOCK_ITEM:
            const stockitem = { stockitem: action.item }
            const instockflag = action.flag
            const stocklength = state.length
            const stockid = stocklength === 0 ? 1 : stocklength + 1
            return [ ...state, { stockid, ...stockitem, instockflag }]

        case CANCEL_STOCKITEM:
            return state.filter( item => item.stockid !== action.id )

        case CANCEL_SHIPPEDITEM:
            return state.filter( item => item.shippedid !== action.id )

        default:
            return state
    }
}

export default items