import {
    SHIPMENT_ITEM,
    INSTOCK_ITEM,
    CANSEL_STOCKITEM,
} from '../actions/index'

const items = ( state=[], action ) => {
    switch( action.type ){
        case SHIPMENT_ITEM:
            const item = { item: action.item }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [ ...state, { id, ...item }]
        case INSTOCK_ITEM:
            const stockitem = { stockitem: action.item }
            const stocklength = state.length
            const stockid = stocklength === 0 ? 1 : state[stocklength - 1].id + 1
            return [ ...state, { stockid, ...stockitem }]
        case CANSEL_STOCKITEM:
            return state.filter( item => item.id !== action.stockid )
        default:
            return state
    }
}

export default items