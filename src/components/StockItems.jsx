import React from 'react'
import StockItem from './StockItem'

const StockItems = ({ state, dispatch }) => {
    // console.log('STOCKITEMS: ' + state)
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
                    {state.map((item, index) => {
                        if(item.instockflag === 'instock'){
                            return(
                                <StockItem key={ index } stockitem={ item.stockitem } id={ item.stockid } dispatch={ dispatch }/>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default StockItems
