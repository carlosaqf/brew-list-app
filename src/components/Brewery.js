import React, { useState, useEffect } from 'react'
import BreweryList from './BreweryList';
import { createRequireFromPath } from 'module';


export default function Brewery({ brewery }) {

    const { name, city, state, website_url } = brewery
    
    
    return (
        <div style={{
            margin: `5px`,
            padding: `5px`,
            background: `grey`,
        }}>
            <h2>{name}</h2>
            <h4>{city}, {state}</h4>
            <p>For more information, please visit us at: <a href={website_url}>our website!</a></p>
        </div>
    )
}

