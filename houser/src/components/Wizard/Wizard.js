import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import WizOne from '../WizardOne/WizOne';
import WizTwo from '../WizardTwo/WizTwo';
import WizThree from '../WizardThree/WizThree';
import {connect} from 'react-redux';
import {clearData} from '../../ducks/reducer';
import './Wizard.css';

class Wizard extends Component {

    render(){
        let {clearData} = this.props
        return (
            <div className='wizard-parent'>
                <div className='wizard-content'>
                    <h2 className='wiz-header'>Add New Listing</h2>
                    <Link to='/' >
                        <button className='cancel' onClick={(e) => clearData()}>Cancel</button>
                    </Link>
                </div> 
                <div className='wiz-props'>
                    <Switch>
                        <Route component={WizOne} path='/wizard/step1' />
                        <Route component={WizTwo} path='/wizard/step2' />
                        <Route component={WizThree} path='/wizard/step3' />
                    </Switch>
                </div>                
            </div> 
        )
    }
}

export default connect(null, {clearData})(Wizard);