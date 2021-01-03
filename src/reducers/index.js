import { combineReducers } from 'redux'

import items from './items'
import operationLogs from './operationLogs'

export default combineReducers({ 
    items, 
    operationLogs,
})