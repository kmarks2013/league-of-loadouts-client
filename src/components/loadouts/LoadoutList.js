import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutCard from './LoadoutCard'

class LoadoutList extends Component {
    render() {
        return (
            <div>
                i will render all loadouts
                <LoadoutCard/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutList)
