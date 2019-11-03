import React, { Component } from 'react'
import { characterList } from '../components/characterList'


export default class contentContainer extends Component {
    render() {
        return (
            <div>
                <characterList />
            </div>
        )
    }
}
