import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampionTile from './ChampionTile'

class ChampionList extends Component {
    state = {
        searchValue:'',
    }

    
    handleSearch = (evt) => {
        console.log(evt.target.value, this.state.searchValue)
        this.setState({
            searchValue: evt.target.value
        })
    }



    renderCharacterTiles = () => {
        const serachedChampions = this.props.champions.filter( champion => {
           return champion.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
        })

        return serachedChampions.map(champion => {
          return  <ChampionTile key={champion.id} champion={champion} />
        })
    }

    render() {
        console.log(this.state.filteredChampions)

        return (
            <div className='content-container'>
                <div className='content-tiles'>
                <h1> All Champions </h1> 
                    <label>Search</label>
                    <input type='text' value={this.state.searchValue} onChange={this.handleSearch}></input> <br></br>
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
