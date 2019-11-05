import React, { Component } from 'react'
import { connect } from 'react-redux'


class LoadoutCard extends Component {


    render() {
        // console.log(this.props)
        
        return (
            <div className='loadout-cards' onClick={() =>{this.props.handleClick(this.props.loadout)}}>
                <h2>{this.props.loadout.name}</h2>
                <h6>{this.props.loadout.user.username}</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutCard)
