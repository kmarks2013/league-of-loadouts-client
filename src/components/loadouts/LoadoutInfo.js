import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadoutInfo extends Component {
    render() {
        return (
            <div>
                <h1>Name</h1>
                
                <h2>Champion</h2>
                <h2>User</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutInfo)
