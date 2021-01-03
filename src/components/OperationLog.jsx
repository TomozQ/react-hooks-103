import React from 'react'


const OperationLog = ({ description, time }) => {
    return (
        <>
            <tr>
                <td>{ description }</td>
                <td>{ time }</td>
            </tr>  
        </>
    )
}

export default OperationLog
