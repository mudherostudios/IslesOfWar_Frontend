import React from 'react';
import Router from '../../router';
import Header from './header';
import Footer from './footer';

const Template = () => {
    return (
        <React.Fragment>
            <Header />
            <Router/>
            <Footer />
        </React.Fragment>
    );
}
 
export default Template;