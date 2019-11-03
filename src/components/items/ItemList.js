import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemTile from './ItemTile'

class ItemList extends Component {
    render() {
        return (
            <div>
                <h1>All Items</h1>
                <ItemTile />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
