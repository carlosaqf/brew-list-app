import React from 'react'
import Brewery from './Brewery'

export default function BreweryList({ breweries }) {
    return (
        <div>
            <h1>Brewery List: </h1>
            {breweries.map(brewery => {
                return <Brewery key={brewery.id} brewery={brewery} style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`
                }}/>
            })} 
        </div>
    )
}
