import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutItemsForm from './LoadoutItemsForm'

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
        editMode: false
    }
    
    


    handleEditMode = () => {
        console.log(this.state.editMode)
        this.setState({
            editMode: !this.state.editMode
        })
    }
    
    editForm = () =>{
        if (this.state.editMode === true)
        return <LoadoutItemsForm />
        else
        return null
    }
    
    render() {
        const {loadout} = this.props 
        console.log(this.props.loadout, this.props.user)
        return (
            <div>
                <h1>{loadout && loadout.id ? loadout.name : null} </h1>
                
                <h2>Champion</h2>
                <h2>{loadout && loadout.id ? loadout.user.username : null}</h2>
                <button onClick={this.handleEditMode}> {this.state.editMode? 'Cancel Edit' :'Edit Loadout'} </button>
                <button >Delete Comment</button>
                {this.editForm()}
                {/* {this.editDeleteButtons()} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   user: state.user
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutInfo)
