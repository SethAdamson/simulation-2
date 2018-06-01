import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch>
        <Route component={Dashboard} path='/' exact />    
        <Route component={Wizard} path='/wizard' />    
    </Switch>
)