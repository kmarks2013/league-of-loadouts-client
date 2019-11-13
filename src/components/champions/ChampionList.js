import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampionTile from './ChampionTile'

class ChampionList extends Component {
    renderCharacterTiles = () => {
        return this.props.champions.map(champion => {
          return  <ChampionTile key={champion.id} champion={champion} />
        })
    }

    render() {
        return (
            <div className='content-container'>
                <div className='content-tiles'>
                <h1> All Champions </h1> 
                    {this.renderCharacterTiles()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      champions: state.champions 
       
  }
}
export default connect(mapStateToProps)(ChampionList)
