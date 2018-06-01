import React from 'react';

export default function House(props){
    return (
        <div className='house-content'>
            <h1>Property Name: {props.name}</h1>
            <h1>Address: {props.address}</h1>
            <h1>City: {props.city}</h1>
            <h1>State: {props.state}</h1>
            <h1>Zip: {props.zip}</h1>
            <button className='delete'onClick={() => props.deleteFn(props.id)}>Delete</button>
        </div> 
    )
}