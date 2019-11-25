import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from './LoadoutTile'
import loadoutActions from '../../Redux/loadoutActions'

class LoadoutList extends Component {
    state = {
        searchValue:'',
    }

    componentDidMount() {
        this.props.fetchLoadoutsFromDB()
    }
    
    handleSearch = (evt) => {
        console.log(evt.target.value, this.state.searchValue)
        this.setState({
            searchValue: evt.target.value
        })
    }

    renderLoadoutTiles = () => {
        // if (this.props.loadouts.length > 0) {    
            const searchedLoadouts = this.props.loadouts.filter( loadout => {
                return loadout.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
             })  
            return searchedLoadouts.map(loadout => {
                return  <LoadoutTile key={loadout.id} loadout={loadout} />
            })
        // }
    }

    render() {
        return (
            <div className='content-container'>
                <div className='loadout-tiles'>
                    <div className='list-title'>
                        <h1>Loadouts</h1>
                        <label>Search</label>
                        <input type='text' value={this.state.searchValue} onChange={this.handleSearch}></input>
                    </div>
                    {this.renderLoadoutTiles()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadouts: state.loadouts
    }
}

const mapDispatchToProps = {
    fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutList)

