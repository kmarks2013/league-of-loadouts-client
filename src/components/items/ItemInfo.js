import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemInfo extends Component {
    render() {
        return (
            <div>
                <h2> Item Name</h2>
                <h2>Item Description</h2>
                <p>description text</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo)
