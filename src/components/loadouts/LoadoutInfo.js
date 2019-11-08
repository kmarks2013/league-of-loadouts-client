import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutItemsForm from './LoadoutItemsForm'
import Actions from '../../Redux/loadoutActions'
import loadoutActions from '../../Redux/loadoutActions'
import {Route, NavLink, Link } from 'react-router-dom'

class LoadoutInfo extends Component {
    // editDeleteButtons = () =>  {

    //     if (this.props.user && this.props.user.id === this.props.loadout.user.id){
    //         return (  
    //             <div>
    //             <button> Edit Loadout </button>
    //             <button >Delete Comment</button>
    //             </div>
    //         )
    //     } else{
    //         return null
    //     }
    // }
    state = {
        name: this.props.loadout.name,
        editMode: false,
        item1: 1,
        item2: 1,
        item3: 1,
        item4: 1,
        item5: 1,
        item6: 1,
    }

    newLoadoutItemPost = (formData) => {
        fetch('http://localhost:3000/loadout_items',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
    }

    handleChange = (evt) => {
        // console.log(evt.target.value, evt.target.name)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        
        evt.preventDefault()
        // console.log(this.state, 'i should updage the loadout name and add items to the loadout')
        // formData  
        this.props.updateLoadoutFromDB(this.props.loadout, this.state)
        const loadoutItems = [this.state.item1, this.state.item2, this.state.item3, this.state.item4, this.state.item5, this.state.item6]
        const formData =  {loadout_id: this.props.loadout.id, items_array: loadoutItems}
        this.newLoadoutItemPost(formData)
        // console.log(loadoutItems)
    }
    
    handleDelete = () => {
        console.log('this loadout should be gone')
        this.props.deleteLoadoutFromDB(this.props.loadout.id)
    }

    handleEditMode = () => {
        // console.log(this.state.editMode)
        this.setState({
            editMode: !this.state.editMode
        })
    }

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
    
    editForm = () =>{
        if (this.state.editMode === true)
        return (
        <React.Fragment>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input onChange={this.handleChange} type='text' name='name' value={this.state.name} />
            <label>Item 1 </label> 
                    <select name='item1' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 2 </label> 
                    <select name='item2' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 3 </label> 
                    <select name='item3' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 4 </label> 
                    <select name='item4' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 5 </label> 
                    <select name='item5' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 6 </label> 
                    <select name='item6' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
            <input type='submit'></input> 
        </form>

        </React.Fragment>
        )
        else
        return null
    }

    itemDoubleClick = (event, itemId, loadoutId) => {
        console.log('i was clicked twice and i should be deleted', itemId, loadoutId)
        fetch(`http://localhost:3000/loadout_items/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                item_id: itemId,
                loadout_id: loadoutId
                
            })
        }).then(res => res.json())
    }


    renderLoadoutItems = () => {
        console.log(this.props.loadout.items, this.props.loadout.loadout_items)
        return this.props.loadout.items.map(item => {
          return (
                <div onDoubleClick={ (evt) => this.itemDoubleClick(evt, item.id, this.props.loadout.id)}>
                <li>{item.name}</li>
                <NavLink to={`/items/${item.name}`} >
                <button>View Item info</button>
                </NavLink>
                </div>
          )
        })
    }
    
    render() {
        const {loadout} = this.props 
        // console.log(this.props, this.props.user)
        return (
            <div>
                <h1>{loadout && loadout.id ? loadout.name : null} </h1>
                
                <h2>Champion</h2>
                <h2>{loadout && loadout.id ? loadout.user.username : null}</h2>
                <h2> Items</h2>
                {this.renderLoadoutItems()}
                <button onClick={this.handleEditMode}> {this.state.editMode? 'Cancel Edit' :'Edit Loadout'} </button>
                <button onClick={this.handleDelete}>Delete Loadout</button>
                {this.editForm()}
                {/* {this.editDeleteButtons()} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   user: state.user,
   items: state.items
})

const mapDispatchToProps = {
    deleteLoadoutFromDB: Actions.deleteLoadoutFromDB, 
    updateLoadoutFromDB: Actions.updateLoadoutFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutInfo)
