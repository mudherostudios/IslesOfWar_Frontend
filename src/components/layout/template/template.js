import React from 'react';
import Router from '../../../router';
import Header from '../header/header';
import Footer from '../footer/footer';
import './template.scss';

const Template = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header />
                <div className="content-container">
                    <Router />
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}
 
export default Template;