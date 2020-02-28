import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Template from './components/layout/template';

const browserHistory = createBrowserHistory();

const App = () => {
    return (  
        <Router history={browserHistory}>
            <Template />
        </Router>
    );
}
 
export default App;