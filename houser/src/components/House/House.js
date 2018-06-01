import React from 'react';
import './House.css';
import deleteicon from '../../image/delete_button.png'

export default function House(props){
    return (
        <div className='house-content'>
            <div className='house-detail'>
                {/* <div className='house-img' style={`background-image: url(${props.img});`}></div>  */}
                <img src={props.img} 
                    alt='House'/>
            </div> 
            <div className='house-detail'>
                <p>Property Name: {props.name}</p>
                <p>Address: {props.address}</p>
                <p>City: {props.city}</p>
                <p>State: {props.stateAbv}</p>
                <p>Zip: {props.zip}</p>
            </div> 
            <div className='house-detail'>
                <p>Mortgage: {props.mortgage}</p>
                <p>Rent: {props.rent}</p>
            </div> 
            <img src={deleteicon} alt='delete' className='delete' onClick={() => props.deleteFn(props.id)}/>
        </div> 
    )
}