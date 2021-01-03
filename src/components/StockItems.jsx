import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import StockItem from './StockItem'

const StockItems = () => {
    const { state, dispatch } = useContext( AppContext )
    return (
        <>
            <h4>在庫一覧</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>商品名</th>
                        <th scope='col'>操作時間</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {state.items.map((item, index) => {
                        if(item.instockflag === 'instock'){
                            return(
                                <StockItem key={ index } stockitem={ item.stockitem } id={ item.stockid } time={ item.stockTime } dispatch={ dispatch }/>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default StockItems
