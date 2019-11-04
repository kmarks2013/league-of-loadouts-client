import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampionTile from './ChampionTile'

class ChampionList extends Component {
    renderCharacterTiles = () => {
        // console.log(this.props.champions)
        return this.props.champions.map(champion => {
          return  <ChampionTile key={champion.id} champion={champion} />
        })
    }

    render() {
        return (
            <div>
            <h1> All Champions </h1> 
                {this.renderCharacterTiles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
  return {
      champions: state.champions 
       
  }
}

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps)(ChampionList)
