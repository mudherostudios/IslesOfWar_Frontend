import React from 'react';
import './header.scss';
import '../../../fonts/BambooGothic-Book.ttf';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-item">
                <div className="navbar-item-text">Home</div>
            </div>
            <div className="navbar-item">
                <div className="navbar-item-text">Downloads</div>
            </div>
            <div className="navbar-item">
                <div className="navbar-item-text">Air Drop</div>
            </div>
        </div>
    );
}
 
export default Header;