import React, { useState } from 'react'

const ItemMove = () => {
    const [ item, setItem ] = useState('')

    return (
        <>
            <h4>在庫移動</h4>
            <div className='form-group'>
                <form>
                    <label>商品</label>
                    <input className='form-control' onChange={ e => setItem( e.target.value )}/>
                </form>
                <button>出荷</button>
                <button>入荷</button>
            </div>
        </>
    )
}

export default ItemMove
