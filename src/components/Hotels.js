import React, { Component } from 'react'

export default class Hotels extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map(hotel => {
                    
                    return <li key={hotel.name}>{hotel.name}</li>;
                })}
            </ul>
        )
    }
}
