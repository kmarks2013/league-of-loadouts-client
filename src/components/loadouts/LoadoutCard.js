import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/loadoutActions'
import {NavLink, withRouter} from 'react-router-dom'

class LoadoutCard extends Component {

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
        .then(loadout => this.props.getLoadoutItems(loadout))
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.updateLoadoutFromDB(this.props.loadout, this.state)
        const loadoutItems = [this.state.item1, this.state.item2, this.state.item3, this.state.item4, this.state.item5, this.state.item6]
        const formData =  {loadout_id: this.props.loadout.id, items_array: loadoutItems}
        this.newLoadoutItemPost(formData)
        this.setState({
            editMode: false
        })
        // this.props.history.push(`/loadouts/${this.props.loadout.id}`)
        // console.log(loadoutItems)
    }
    
    handleDelete = () => {
        this.props.deleteLoadoutFromDB(this.props.loadout.id)
        this.props.history.push('/loadouts')
    }

    handleEditMode = () => {
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
        if (this.props.user.id === this.props.loadout.user_id) {
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
            .then( loadoutItem => {
                this.props.getLoadoutItems(loadoutItem)
    
            })
        } else 
             return null
    }


    renderLoadoutItems = () => {
        return this.props.loadout.items.map(item => {
          return (
                <div className='loadout-item' onDoubleClick={ (evt) => this.itemDoubleClick(evt, item.id, this.props.loadout.id)}>
                <img src={`/items_images/${item.api_num}.png`} alt="" />
                <p>{item.name}</p>
                <NavLink to={`/items/${item.name}`} >
                <button>View Item info</button>
                </NavLink>
                </div>
          )
        })
    }

    editDeleteButtons = () => {
        if (this.props.user.id === this.props.loadout.user_id){
            return (
                <div>
                    <button onClick={this.handleEditMode}> {this.state.editMode? 'Cancel Edit' :'Edit Loadout'} </button>
                    <button onClick={this.handleDelete}>Delete Loadout</button>
                </div>
            )
        }
    }

    renderTotalCost = () => {
        let totalCost = 0
         this.props.loadout.items.forEach(item => {
             totalCost += parseInt(item.cost)
        })
        return totalCost
    }
    
    render() {
        const {loadout} = this.props 
        return (
                <div className='content-container'>
                    <div className='loadout-card'>
                    <h1>{loadout && loadout.id ? loadout.name : null} </h1>
                    <h2>Champion</h2>
                    {/* <img src={`./champion_tiles/${loadout.champion.name}_0.jpg`} height='100' width='100'/> */}
                    <img src={`/champion_tiles/${loadout.champion.name}_0.jpg`} alt=""></img>
                    <h3>{loadout && loadout.id ? loadout.champion.name : null}</h3>
                    <p>{loadout && loadout.id ? loadout.user_name : null}</p>
                    <h2> Items</h2>
                    {this.renderLoadoutItems()}
                    <h3>Total Cost</h3>
                    <p>{this.renderTotalCost()}</p>
                    {this.editForm()}
                    {this.editDeleteButtons()}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
   user: state.user.user,
   items: state.items
})

const mapDispatchToProps = {
    deleteLoadoutFromDB: Actions.deleteLoadoutFromDB, 
    updateLoadoutFromDB: Actions.updateLoadoutFromDB,
    getLoadoutItems: Actions.getLoadoutItems
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadoutCard))
