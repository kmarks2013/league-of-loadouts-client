import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/loadoutActions'
import {NavLink, withRouter} from 'react-router-dom'
import ReactHover from 'react-hover'
import LoadoutItem from './LoadoutItem'
import levelActions from '../../Redux/levelActions'
import LoadoutBaseStats from './LoadoutCardInfo/LoadoutBaseStats'
import LoadoutIcon from './LoadoutCardInfo/LoadoutIcon'


const optionsCursorTrueWithMarginLeft = {
    followCursor: true,
    shiftX: -530,
    shiftY: 0
}

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

    deleteItem = (event, itemId, loadoutId) => {
        // console.log('i have been clicked', event.target, itemId, loadoutId)
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
            console.log('null')
    }
    
    renderLoadoutItems = () => {
        return this.props.loadout.items.map(item => {
            return (
                <ReactHover options={optionsCursorTrueWithMarginLeft}>
                    <ReactHover.Trigger type='trigger'>
                        <div className='loadout-item-tile'>
                        <img src={`/items_images/${item.image}`} alt="" />
                        {this.props.user.id? <button onClick={ (evt) => this.deleteItem(evt, item.id, this.props.loadout.id)}>x</button> : null}
                        <p>{item.name}</p>                        
                        <NavLink to={`/items/${item.name}`} >
                        <button>View Item info</button>
                        </NavLink>
                        </div>
                    </ReactHover.Trigger>
                    <ReactHover.Hover type='hover'>
                        <LoadoutItem item={item}/>
                    </ReactHover.Hover>
                </ReactHover>
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
    
    addClick = () =>{
        if (this.props.level < 18){
            return this.props.addLevel()
        } else{
           return  null
        }
    }

    subtractClick = () =>{
        if (this.props.level > 1)
            return this.props.subtractLevel()
        else 
            return null
    }

    render() {
        const {loadout, level} = this.props 
        return (
                <div className='content-container'>
                    <div className='loadout-card'>
                        <LoadoutIcon loadout={loadout} level={level} addClick={this.addClick} subtractClick={this.subtractClick} />
                        <LoadoutBaseStats loadout={loadout} level={level}/>
                    <div className='loadout-info'>
                        <div className='loadout-all-items'>
                        <h2> Items</h2>
                        {this.renderLoadoutItems()}
                        </div>
                        <div className='loadout-total-cost'>
                            <h3>Total Cost</h3>
                            <p>{this.renderTotalCost()}</p>
                        </div>
                    </div>
                    {this.editForm()}
                    {this.editDeleteButtons()}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
   user: state.user.user,
   items: state.items,
   level: state.level

})

const mapDispatchToProps = {
    deleteLoadoutFromDB: Actions.deleteLoadoutFromDB, 
    updateLoadoutFromDB: Actions.updateLoadoutFromDB,
    getLoadoutItems: Actions.getLoadoutItems,
    addLevel: levelActions.addLevel,
    subtractLevel: levelActions.subtractLevel
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadoutCard))
