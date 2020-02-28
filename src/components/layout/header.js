import React from 'react';
import styled from 'styled-components';
import { size } from '../../screen-sizes';

const NavBar = styled.div`
    display: flex;
    background-color: #2e2e2e;
    position: sticky;
    top: 0px;
    width: 43rem;
    clip-path: polygon(0% 0, 100% 0, 0 800%, 0 0);

    @media only screen and (max-width: ${size.tablet}) {
        clip-path: none;
        width: 100%
    }
`;

const NavBarItem = styled.div`
    height: 3rem;
    cursor: pointer;
    flex: 0 0 auto;
    padding: 0 3rem;

    :not(:first-child) {
        border-left: 1px solid #232323;
    }

    @media only screen and (max-width: ${size.tablet}) {
        padding: 0;
        flex: 1;

        :not(:first-child) {
            border-top: 1px solid #232323;
        }
    }
`;

const NavBarItemText = styled.div`
    @font-face {
        font-family: 'BambooGothic';
        src: local('BambooGothic'), url('../../BambooGothic-Book.ttf') format('truetype');
    }

    font-family: 'BambooGothic';
    font-size: 1.4rem;
    color: #8b8b8b;
    text-align: center;
    padding: 0.4rem;
`;

const Header = () => {
    return (
        <NavBar>
            <NavBarItem>
                <NavBarItemText>Home</NavBarItemText>
            </NavBarItem>

            <NavBarItem>
                <NavBarItemText>Downloads</NavBarItemText>
            </NavBarItem>

            <NavBarItem>
                <NavBarItemText>Air Drop</NavBarItemText>
            </NavBarItem>
        </NavBar>
    );
}
 
export default Header;