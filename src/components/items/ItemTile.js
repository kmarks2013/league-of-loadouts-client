import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class ItemTile extends Component {
    render() {
        return (
            <div className='content' onClick={() =>{this.props.itemClick(this.props.item)}} >
                <h2> {this.props.item.name} </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile)
