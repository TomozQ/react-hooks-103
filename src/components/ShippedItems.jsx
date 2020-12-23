import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'

const ShippedItems = ({ state, dispatch }) => {
    const value = useContext(AppContext)

    return (
        <>
            <h4>出荷済み一覧</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>商品名</th>
                        <th scope='col'></th>
                        <th scope='col'>操作時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>アウター</td>
                        <td><button>取消</button></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShippedItems
