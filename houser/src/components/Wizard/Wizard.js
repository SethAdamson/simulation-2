import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null,
            redirect: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.postHouse = this.postHouse.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetState(){
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null,
            redirect: false
        })
    }

    postHouse(){
        let {name, address, city, state, zip} = this.state;
        axios.post('/api/houses', {name, address, city, state, zip}).then(res => {
            this.setState({redirect: true})
            this.resetState();
        })
    }

    render(){
        let {name, address, city, state, zip, redirect} = this.state;
        console.log(this.state);
        if(redirect){
            return(<Redirect to='/' />)
        }
        return (
            <div className='wizard-parent'>
                <div className='wizard-content'>
                    <input className='name' name='name' onChange={this.handleChange}/>
                    <input className='address' name='address' onChange={this.handleChange}/>
                    <input className='city' name='city' onChange={this.handleChange}/>
                    <input className='state' name='state' onChange={this.handleChange}/>
                    <input className='zip' name='zip' onChange={this.handleChange}/>
                    <button className='post' onClick={this.postHouse}>Complete</button>
                    <Link to='/' >
                        <button className='cancel'>Cancel</button>
                    </Link>
                </div> 
            </div> 
        )
    }
}