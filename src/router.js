import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import NotFound from './components/pages/not-found';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route component={NotFound} />
        </Switch>
    );
}
 
export default Router;