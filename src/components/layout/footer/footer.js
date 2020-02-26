import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; IslesOfWar {new Date().getFullYear()}</p>
        </footer>
    );
};
 
export default Footer;