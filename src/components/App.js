import React, { useReducer } from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockItems from './StockItems'
import ShippedItems from './ShippedItems'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index'

const App = () => {
  const [ state, dispatch ] = useReducer( reducer, [] )
  return (
    <AppContext.Provider value={ 'Hello, Iam Provider' }>
      <div className="container-fluid">
        <ItemMove state={ state } dispatch={ dispatch } />
        <StockItems state={ state } dispatch={ dispatch } />
        <ShippedItems state={ state } dispatch={ dispatch } />
      </div>
    </AppContext.Provider>
  );
}

export default App;
