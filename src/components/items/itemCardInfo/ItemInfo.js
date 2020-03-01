import React from 'react'

function ItemInfo() {
    return (
        <div className='item-icon'>
            <h2>{item.name }</h2>
            <img src={`/items_images/${item.image}`} alt=''/>
        </div>
    )
}

export default ItemInfo
