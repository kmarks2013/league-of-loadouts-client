import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LoadoutItems extends Component {
    render() {
        return (
            <div>
                <p>i shoudl render this item</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutItems)
