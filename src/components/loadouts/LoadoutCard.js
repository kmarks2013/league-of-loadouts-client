import React, { Component } from 'react'
import { connect } from 'react-redux'
 

class LoadoutCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.loadout.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutCard)
