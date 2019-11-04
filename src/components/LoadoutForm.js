import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadoutForm extends Component {
    state = {
        name: ''
    
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log('i was submitted', this.state)

    }

    handleChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <div>
            <h1>Create a New Loadout</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Select a Character</label>
                    <label>Name</label>
                    <input  onChange={this.handleChange} type='text' name="name" value={this.state.name}/> 
                    <select>
                        <option>Item</option>
                        <option>Name</option>
                        <option>Item</option>
                    </select>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutForm)
