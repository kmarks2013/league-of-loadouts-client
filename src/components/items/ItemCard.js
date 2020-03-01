import React, { Component } from 'react'
import ItemStats from './itemCardInfo/ItemStats'

class ItemCard extends Component {
    
    renderItem = () => {
        const { item } = this.props 
        if (item && item.id ){
           return (
            <div className='content-container'>
                <div className='item-card'>
                    <div className='item-icon'>
                        <h2>{item.name }</h2>
                        <img src={`/items_images/${item.image}`} alt=''/>
                    </div>
                    <ItemStats item={item} />
                    {/* <div className='item-info'>
                        <h3>ItemDescription</h3>
                        <p>{item.description}</p>
                        <p>{item.plaintext}</p>
                        <h3>Cost</h3>
                        <p>{item.cost}</p>
                    </div> */}
                </div>
            </div>
           )
        } else 
            return (
            <div></div>
            )
    }

    render() {

        return (
            <>
                {this.renderItem()}
            </>
        )
    }
}


export default (ItemCard)
