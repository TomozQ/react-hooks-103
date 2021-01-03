import React, { useEffect, useReducer } from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockItems from './StockItems'
import ShippedItems from './ShippedItems'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index'
import OperationLogs from './OperationLogs'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    items: [],
    operationLogs: []
  }
  const [ state, dispatch ] = useReducer( reducer, initialState )

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <ItemMove/>
        <StockItems/>
        <ShippedItems/>
        <OperationLogs/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
