import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import StockItem from './StockItem'

const StockItems = ({ state, dispatch }) => {
    const value = useContext(AppContext)
    return (
        <>
            <h4>在庫一覧</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>商品名</th>
                        <th scope='col'></th>
                        <th scope='col'>操作時間</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((stockitem, index) => (<StockItem key={ index } stockitem={ stockitem } dispatch={ dispatch }/>))}
                </tbody>
            </table>
        </>
    )
}

export default StockItems
