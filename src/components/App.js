import React from 'react'
import ItemMove from './ItemMove'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container-fluid">
      <ItemMove/>
      <h4>在庫一覧</h4>
    </div>
  );
}

export default App;
