import React, { Component } from 'react'
import { connect } from 'react-redux'
 
class ItemTile extends Component {
    render() {
        return (
            <div>
                <h2> Item Name </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile)
