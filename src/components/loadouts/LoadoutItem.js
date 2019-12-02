import React, { Component } from 'react'

export class LoadoutItem extends Component {
    render() {
        console.log(this.props)
        const { item } = this.props 
        if (item && item.id ){
        return (
            <div className='loadout-item-hover'>
            <div className='item-icon'>
                <h2>{item.name }</h2>
                <img src={`/items_images/${item.image}`} alt=''/>
            </div>
            <div className='item-info'>
                <h3>ItemDescription</h3>
                <p>{item.description}</p>
                <p>{item.plaintext}</p>
                <h3>Cost</h3>
                <p>{item.cost}</p>
            </div>
        </div>
        )
    } else 
        return (
        <div>no item here</div>
        )
    }
}



export default LoadoutItem
