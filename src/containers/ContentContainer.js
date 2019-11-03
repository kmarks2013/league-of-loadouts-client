import React, { Component } from 'react'
import { ChampionList } from '../components/ChampionList'



export default class ContentContainer extends Component {
    render() {
        return (
            <div>
            <p>this should render different content conditionally</p>
            <ChampionList />
            </div>
        )
    }
}
