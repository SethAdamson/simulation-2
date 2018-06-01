import React from 'react';

export default function House(props){
    return (
        <div className='house-content'>
            <img src={props.img} />
            <h1>Property Name: {props.name}</h1>
            <h1>Address: {props.address}</h1>
            <h1>City: {props.city}</h1>
            <h1>State: {props.stateAbv}</h1>
            <h1>Zip: {props.zip}</h1>
            <h1>Mortgage: {props.mortgage}</h1>
            <h1>Rent: {props.rent}</h1>
            <button className='delete'onClick={() => props.deleteFn(props.id)}>Delete</button>
        </div> 
    )
}