import React, { Component } from 'react'
import { connect } from 'react-redux'
 

class LoadoutCard extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.loadout.name}</h2>
                <h6>{this.props.loadout.user}</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutCard)
