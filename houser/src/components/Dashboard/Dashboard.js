import React, {Component} from 'react';
import House from '../House/House'

export default class Dashboard extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className='dash-parent'>
                Dashboard
                <House />
            </div> 
        )
    }
}