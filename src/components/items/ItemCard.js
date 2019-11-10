import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemCard extends Component {
    
    renderItem = () => {
        const { item } = this.props 
        if (item && item.id ){
            console.log(item.api_num)
           return (
            <div className='content-container'>
                <div className='item-card'>
                    <h2>{item.name }</h2>
                    <img src={`./items_images/${item.api_num}.png`} />
                    <h3>ItemDescription</h3>
                    <p>{item.description}</p>
                    <p>{item.plaintext}</p>
                    <h3>Cost</h3>
                    <p>{item.cost}</p>
                </div>
            </div>
           )
        } else 
            return (
            <div>

            </div>
            )
    }
    

    render() {

        return (
            <div>
                {this.renderItem()}
                {/* <div className='content-container'>
                <div className='item-card'>
                    <img src={`./items_images/${item.api_num}.png`} />
                    <h2>{item && item.id ? item.name: null }</h2>
                    
                    <h3>ItemDescription</h3>
                    <p>{item && item.id ? item.description: null }</p>

                </div>

                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
