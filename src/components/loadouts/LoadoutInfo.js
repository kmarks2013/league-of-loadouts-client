import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutItemsForm from './LoadoutItemsForm'
import Actions from '../../Redux/loadoutActions'

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
        editMode: false
    }

    handleChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        
        evt.preventDefault()
        console.log(this.state, 'i should updage the loadout name and add items to the loadout')
        // formData  
        this.props.updateLoadoutFromDB(this.props.loadout, this.state)
    }
    
    handleDelete = () => {
        console.log('this loadout should be gone')
        this.props.deleteLoadoutFromDB(this.props.loadout.id)
    }

    handleEditMode = () => {
        console.log(this.state.editMode)
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
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 2 </label> 
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 3 </label> 
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 4 </label> 
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 5 </label> 
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
                    <label>Item 6 </label> 
                    <select name='item' onChange={this.handleChange}>
                        {this.itemsSelection()}
                    </select>
            <input type='submit'></input> 
        </form>

        </React.Fragment>
        )
        else
        return null
    }
    
    render() {
        const {loadout} = this.props 
        console.log(this.props, this.props.user)
        return (
            <div>
                <h1>{loadout && loadout.id ? loadout.name : null} </h1>
                
                <h2>Champion</h2>
                <h2>{loadout && loadout.id ? loadout.user.username : null}</h2>
                <button onClick={this.handleEditMode}> {this.state.editMode? 'Cancel Edit' :'Edit Loadout'} </button>
                <button onClick={this.handleDelete}>Delete Comment</button>
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
