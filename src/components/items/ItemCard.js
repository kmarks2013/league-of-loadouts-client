import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemCard extends Component {

    // renderItem = () => {
    //     if (this.props.item){
    //        return (
    //            <div>
    //             <h2> {this.props.item.name}</h2>
    //             <h2>Item Description</h2>
    //             <p>{this.props.item.description}</p>
    //            </div>
    //        )
    //     } else 
    //         return (
    //         <div>

    //         </div>
    //         )
    // }

    render() {
        return (
            <div>
                {/* {this.renderItem()} */}
                <div className='content-container'>
                <div className='item-card'>
                    <h2>{this.props.item && this.props.item.id ? this.props.item.name: null }</h2>
                    
                    <h3>ItemDescription</h3>
                    <p>{this.props.item && this.props.item.id ? this.props.item.description: null }</p>

                </div>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
