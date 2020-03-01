import React from 'react'

function ItemStats() {
    return (
        <div className='item-info'>
            <h3>ItemDescription</h3>
            <p>{item.description}</p>
            <p>{item.plaintext}</p>
            <h3>Cost</h3>
            <p>{item.cost}</p>
        </div>
    )
}

export default ItemStats
