import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import WizOne from '../WizardOne/WizOne';
import WizTwo from '../WizardTwo/WizTwo';
import WizThree from '../WizardThree/WizThree';

export default class Wizard extends Component {
    constructor(){
        super();

    }

    render(){
        return (
            <div className='wizard-parent'>
                <div className='wizard-content'>
                <h1>Add New Listing</h1>
                    <Link to='/' >
                        <button className='cancel'>Cancel</button>
                    </Link>
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