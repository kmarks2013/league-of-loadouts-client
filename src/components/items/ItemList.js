import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemTile from './ItemTile'

class ItemList extends Component {
    state = {
        searchValue:'',
    }

    handleSearch = (evt) => {
        console.log(evt.target.value, this.state.searchValue)
        this.setState({
            searchValue: evt.target.value
        })
    }
    
    renderItemTiles = () => {
        const searchedItems = this.props.items.filter(item => { return item.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1
        })
        return searchedItems.map(item => {
            return <ItemTile key={item.id}  item={item} />
        })
    }



    render() {
        return (
            
            <div className='content-container'>
                <div className='content-tiles'>
                    <div className='list-title'>
                    <h1>All Items</h1>
                    <label>Search</label>
                        <input type='text' value={this.state.searchValue} onChange={this.handleSearch}></input> <br></br>
                    </div>
                    <div>
                    {this.renderItemTiles()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {items: state.items}
}



export default connect(mapStateToProps)(ItemList)
