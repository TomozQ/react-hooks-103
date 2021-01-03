import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
    const { state } = useContext(AppContext)
    return (
        <>
            <h4>操作ログ一覧</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>操作</th>
                        <th scope='col'>操作時間</th>
                    </tr>
                </thead>
                <tbody>
                    {state.operationLogs.map((time, index) => {
                        return(
                            <OperationLog key={ index } description={ time.description } time={ time.operatedAt } />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default OperationLogs
