import React from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockItems from './StockItems'
import ShippedItems from './ShippedItems'

const App = () => {
  return (
    <div className="container-fluid">
      <ItemMove/>
      <StockItems/>
      <ShippedItems/>
    </div>
  );
}

export default App;
