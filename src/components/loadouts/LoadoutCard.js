import React, { Component } from 'react'
import { connect } from 'react-redux'
 

class LoadoutCard extends Component {
    render() {
        return (
            <div>
                i will render a loadout LoadoutCard
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutCard)
