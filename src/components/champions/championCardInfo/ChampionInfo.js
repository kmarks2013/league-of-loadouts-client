import React, { Component } from 'react'

export default class ChampionInfo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.champion && this.props.champion.id ? this.props.champion.name: null }, {this.props.champion && this.props.champion.id ? this.props.champion.title: null } </h2>
                <h3>Lore</h3>
                <p onClick={this.props.loreClick}>{this.props.renderLore()}</p>
            </div>
        )
    }
}
