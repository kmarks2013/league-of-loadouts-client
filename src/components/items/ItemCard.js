import React, { Component } from 'react'
import ItemStats from './itemCardInfo/ItemStats'
import ItemInfo from './itemCardInfo/ItemInfo'

class ItemCard extends Component {
    
    renderItem = () => {
        const { item } = this.props 
        if (item && item.id ){
           return (
            <div className='content-container'>
                <div className='item-card'>
                    <ItemInfo item={item} />
                    <ItemStats item={item} />
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
