import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: absolute;
    height: 2.5rem;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright &copy; IslesOfWar {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};
 
export default Footer;