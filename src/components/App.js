import React from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'
import Items from './Items'

const App = () => {
  return (
    <div className="container-fluid">
      <ItemMove/>
      <Items/>
    </div>
  );
}

export default App;
