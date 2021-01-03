import React, { useReducer } from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockItems from './StockItems'
import ShippedItems from './ShippedItems'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index'
import OperationLogs from './OperationLogs'

const App = () => {
  const initialState = {
    items: [],
    operationLogs: []
  }
  const [ state, dispatch ] = useReducer( reducer, initialState )
  return (
    <AppContext.Provider>
      <div className="container-fluid">
        <ItemMove state={ state } dispatch={ dispatch } />
        <StockItems state={ state } dispatch={ dispatch } />
        <ShippedItems state={ state } dispatch={ dispatch } />
        <OperationLogs state={ state } dispatch={ dispatch }/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
