import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updatePayment} from '../../ducks/reducer'

class WizardThree extends Component {
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0,
            redirect: false,
        }

        this.handleMoney = this.handleMoney.bind(this);
        this.postHouse = this.postHouse.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleMoney(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postHouse(){
        let {name, address, city, stateAbv, zip, img} = this.props;
        let {mortgage, rent} = this.state;
        axios.post('/api/houses', {name, address, city, stateAbv, zip, img, mortgage, rent}).then(res => {
            this.setState({redirect: true})
        })
    }


    render(){
        console.log(this.state);
        let {mortgage, rent} = this.state;
        if(this.state.redirect){
            return(<Redirect to='/' />)
        }
        return (
            <div className='wizard-three-parent'>
                <div className='wizard-three-content'>
                    <input className='mortgage' name='mortgage' onChange={this.handleChange}/>
                    <input className='rent' name='rent' onChange={this.handleChange}/>
                    <Link to='/wizard/step2' >
                        <button className='pre-3' onClick={(e) => updatePayment(mortgage, rent)}>Previous Step</button>
                    </Link>      
                    <button className='post' onClick={this.postHouse}>Complete</button>                
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
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, {updatePayment})(WizardThree);