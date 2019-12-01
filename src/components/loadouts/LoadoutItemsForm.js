import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadoutItemsForm extends Component {
    itemsSelection = () => {
        return (
            <React.Fragment>
                { 
                    this.props.items.map( item => {
                        return <option value={item.id}>{item.name}</option>
                    }) 
                }
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
              {/* <form onSubmit={this.handleSubmit}> */}
                    <label>Item 1 </label> 
                    <select name='item' onChange={this.handleChange}>
                        <option> </option>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 2 </label> 
                    <select name='item' onChange={this.handleChange}>
                        <option> </option>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 3 </label> 
                    <select name='item' onChange={this.handleChange}>
                    <option> </option>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 4 </label> 
                    <select name='item' onChange={this.handleChange}>
                        <option> </option>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 5 </label> 
                    <select name='item' onChange={this.handleChange}>
                        <option> </option>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 6 </label> 
                    <select name='item' onChange={this.handleChange}>
                        <option> </option>
                        {this.itemsSelection()}
                    </select>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutItemsForm)
