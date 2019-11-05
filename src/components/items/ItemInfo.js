import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemInfo extends Component {

    renderItem = () => {
        if (this.props.item){
           return (
               <div>
                <h2> {this.props.item.name}</h2>
                <h2>Item Description</h2>
                <p>{this.props.item.description}</p>
               </div>
           )
        } else 
            return (
            <div>

            </div>
            )
    }

    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo)
