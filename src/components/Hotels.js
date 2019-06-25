import React, { Component } from 'react'

export default class Hotels extends Component {
    render() {
        return (
            <ul>
                {this.props.data.map(hotel => {
                    const { name, starRating, facilities } = hotel
                    return <li key={name}>{`name: ${name}, star rating: ${starRating}, facilities: ${[...facilities]}`}</li>;
                })}
            </ul>
        )
    }
}
