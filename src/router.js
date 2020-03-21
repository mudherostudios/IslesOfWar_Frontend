import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/not-found';
import Airdrop from './components/pages/airdrop';
import VerifyEmail from './components/pages/verify-email';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/airdrop' component={Airdrop}></Route>
            <Route exact path='/verifyemail' component={VerifyEmail}></Route>
            <Route component={NotFound} />
        </Switch>
    );
}
 
export default Router;