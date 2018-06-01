import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
            zip: undefined,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateAbv: this.props.stateAbv,
            zip: this.props.zip,
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let {name, address, city, stateAbv, zip} = this.state;
        let {updateLocation} = this.props;
        return (
            <div className='wizard-one-parent'>
                <div className='wizard-one-content'>
                    <div className='wiz_input_box'> 
                        <p>Property Name</p>
                        <input className='name' name='name' 
                            value={name} onChange={this.handleChange}/>
                    </div>
                    <div className='wiz_input_box'> 
                        <p>Address</p>
                        <input className='address' name='address' 
                            value={address} onChange={this.handleChange}/>
                    </div>
                    <div className='wiz_input_box'> 
                        <p>City</p>
                        <input className='city' name='city' 
                            value={city} onChange={this.handleChange}/>
                    </div>
                    <div className='wiz_input_box'> 
                        <p>State</p>
                        <input className='state' name='stateAbv' 
                            value={stateAbv} onChange={this.handleChange}/>
                    </div>
                    <div className='wiz_input_box'>
                        <p>Zip</p>
                        <input className='zip' name='zip' 
                            value={zip} onChange={this.handleChange}/>
                    </div>
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