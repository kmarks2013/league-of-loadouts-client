import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemTile from './ItemTile'

class ItemList extends Component {
    renderItemTiles = () => {
        return this.props.items.map(item => {
            return <ItemTile key={item.id}  item={item} />
        })
    }
    render() {
        return (
            
            <div className='content-container'>
                <div className='content-tiles'>
                <h1>All Items</h1>
                {this.renderItemTiles()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {items: state.items}
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
