import React from 'react'

const items = ( state=[], action ) => {
    switch( action.type ){
        case 'SHIPMENT_ITEM':
            const item = { item: action.item }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [ ...state, { id, ...item }]
        case 'INSTOCK_ITEM':
            return state
        default:
            return state
    }
}

export default items