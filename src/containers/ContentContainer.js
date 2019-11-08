import React, { Component } from 'react'
// import ChampionList from '../components/champions/ChampionList'
import ChampionInfo from '../components/champions/ChampionInfo'
// import ItemList from '../components/items/ItemList'
import ItemInfo from '../components/items/ItemInfo'
import LoadoutCard from '../components/loadouts/LoadoutCard'
import LoadoutInfo from '../components/loadouts/LoadoutInfo'
import LoadoutList from '../components/loadouts/LoadoutList'
// import LoadoutCard from '../components/loadouts/LoadoutCard'
// import LoadoutInfo from '../components/loadouts/LoadoutInfo'



export default class ContentContainer extends Component {
    
    renderInfo = () => {
        if (this.props.item && this.props.item.id){
            return <ItemInfo item={this.props.item} /> 
        } else if (this.props.champion && this.props.champion.id) {
            return <ChampionInfo champion={this.props.champion} /> 
        } else if (this.props.loadout && this.props.loadout.id) {
           return <LoadoutInfo loadout={this.props.loadout}/>
        } else{
            return null
        }
    }

    render() {
        return (
            <div className='column'>

            {/* <ItemList />  */}
            {/* <ChampionList/>        */}
            {/* <LoadoutList /> */}
            {/* <LoadoutInfo /> */}
            {/* <LoadoutInfo loadout={this.props.loadout}/> */}
            {this.renderInfo()}
            </div>
        )
    }
}
