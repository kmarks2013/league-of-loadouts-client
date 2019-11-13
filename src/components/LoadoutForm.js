import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../Redux/loadoutActions'
import {withRouter} from 'react-router-dom'

class LoadoutForm extends Component {
    state = {
        name: "New Loadout",
        champion: 1
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = {user_id: this.props.user.id, champion_id:this.state.champion, name:this.state.name}
        fetch('http://localhost:3000/loadouts' ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Application: 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newLoadout => {
            this.props.newLoadoutPost(newLoadout)
            this.props.history.push(`/loadouts/${newLoadout.id}`)
        })
        
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    championsSelection = () => {
        return (
            <React.Fragment>
                { 
                    this.props.champions.map( champ => {
                        return <option value={champ.id}>{champ.name}</option>
                    }) 
                }
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='form-container'>
                <div className='loadout-form'>
                <h1>Create a New Loadout</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input  onChange={this.handleChange} type='text' name="name" value={this.state.name}/> 

                        <label>Select a Champion</label>
                        <select name='champion' onChange={this.handleChange}>
                            {this.championsSelection()}
                        </select>
                        <input type='submit'></input>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    champions: state.champions
})

const mapDispatchToProps = {
    newLoadoutPost: Actions.newLoadoutPost,
    createNewLoadout: Actions.newLoadoutPost,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadoutForm))
