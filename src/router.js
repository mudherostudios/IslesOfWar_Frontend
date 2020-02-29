import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/not-found';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route component={NotFound} />
        </Switch>
    );
}
 
export default Router;