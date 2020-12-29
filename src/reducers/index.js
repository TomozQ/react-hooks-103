import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    CANSEL_STOCKITEM,
    CANSEL_SHIPPEDITEM,
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

        case CANSEL_STOCKITEM:
            return state.filter( item => item.stockid !== action.stockid )

        case CANSEL_SHIPPEDITEM:
            return state.filter( item => item.shippedid !== action.shippedid )

        default:
            return state
    }
}

export default items