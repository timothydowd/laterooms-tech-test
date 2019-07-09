import React from 'react'

const Hotels = (props) => {
   
        return (
            <ul>
                {props.data.map(hotel => {
                    const { name, starRating, facilities } = hotel
                    return <li key={name}>{`name: ${name}, star rating: ${starRating}, facilities: ${[...facilities]}`}</li>;
                })}
            </ul>
        )
    
}

export default Hotels