import React, { Component } from 'react'
import ChampionList from '../components/ChampionList'
import ChampionInfo from '../components/ChampionInfo'
import ItemList from '../components/ItemList'
import ItemInfo from '../components/ItemInfo'



export default class ContentContainer extends Component {
    render() {
        return (
            <div>

            <p>this should render loadout indexes and shows, champ index and shows, and item index and show conditionally</p>
            <ItemList />
            <ItemInfo />
            {/* <ChampionList /> */}
            {/* <ChampionInfo /> */}
            </div>
        )
    }
}
