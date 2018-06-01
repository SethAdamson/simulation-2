import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateImg} from '../../ducks/reducer'

class WizardTwo extends Component {
    constructor(){
        super();

        this.state = {
            img: '',
        }

        this.handleImg = this.handleImg.bind(this);
    }

    componentDidMount(){
        this.setState({
            img: this.props.img,
        })
    }

    handleImg(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let {updateImg} = this.props;
        // console.log(this.state);
        return (
            <div className='wizard-two-parent'>
                <div className='wizard-two-content'>
                    <input className='img' name='img' value={this.state.img} onChange={this.handleImg}/>
                    <Link to='/wizard/step1' >
                        <button className='pre-2' onClick={(e) => updateImg(this.state.img)}>Previous Step</button>
                    </Link>      
                    <Link to='/wizard/step3' >
                        <button className='pre-2' onClick={(e) => updateImg(this.state.img)}>Next Step</button>
                    </Link>                    
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        img: state.img,
    }
}

export default connect(mapStateToProps, {updateImg})(WizardTwo);