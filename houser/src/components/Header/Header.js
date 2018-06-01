import React from 'react';
import logo from '../../image/houser_logo.png';
import './Header.css';

export default function Header(){
    return (
        <div className='header-parent'>
            <img className='houser' src={logo} alt='Houser' />
            <h1>Houser</h1>
        </div> 
    )
}