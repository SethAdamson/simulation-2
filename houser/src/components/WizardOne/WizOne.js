import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateLocation} from '../../ducks/reducer';

class WizardOne extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            stateAbv: '',
            zip: null,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let {name, address, city, stateAbv, zip} = this.state;
        // let {updateLocation} = this.props;
        console.log(this.props);
        return (
            <div className='wizard-one-parent'>
                <div className='wizard-one-content'>
                    <input className='name' name='name' 
                        value={name} onChange={this.handleChange}/>
                    <input className='address' name='address' 
                        value={address} onChange={this.handleChange}/>
                    <input className='city' name='city' 
                        value={city} onChange={this.handleChange}/>
                    <input className='state' name='stateAbv' 
                        value={stateAbv} onChange={this.handleChange}/>
                    <input className='zip' name='zip' 
                        value={zip} onChange={this.handleChange}/>
                    <Link to='/wizard/step2' >
                        <button className='next-1' onClick={(e) => updateLocation(name, address, city, stateAbv, zip)}>Next Step</button>
                    </Link>                    
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        stateAbv: state.stateAbv,
        zip: state.zip,
    }
}

export default connect(mapStateToProps, {updateLocation})(WizardOne);