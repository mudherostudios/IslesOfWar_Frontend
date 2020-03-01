import React from 'react';
import styled from 'styled-components';
import { size } from '../../screen-sizes';
import { NavLink } from 'react-router-dom';
import { GAME_DOWNLOAD_WINDOWS } from '../../constants';

const NavBar = styled.div`
    display: flex;
    background-color: #232323;
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
    flex: 0 0 auto;
    padding: 0 3rem;

    :not(:first-child) {
        border-left: 1px solid #404040;
    }

    @media only screen and (max-width: ${size.tablet}) {
        padding: 0;
        flex: 1;
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

    &.strike-through {
        text-decoration: line-through;
    }

    @media only screen and (max-width: ${size.mobileS}) {
        font-size: 1.3rem;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    :not(:first-child) {
        border-left: 1px solid #404040;
    }

    @media only screen and (max-width: ${size.tablet}) {
        padding: 0;
        flex: 1;
    }
`;

const StyledAnchor = styled.a`
    color: #dedede;
    text-decoration: none;

    :visited {
        color: inherit;
    }

    :hover {
        color: inherit;
    }

    :active {
        color: inherit;
    }

    :not(:first-child) {
        border-left: 1px solid #404040;
    }

    @media only screen and (max-width: ${size.tablet}) {
        padding: 0;
        flex: 1;
    }
`;

const Header = () => {
    return (
        <NavBar>
            <StyledNavLink to='/home'>
                <NavBarItem>
                    <NavBarItemText>Home</NavBarItemText>
                </NavBarItem>
            </StyledNavLink>
            
            <StyledAnchor href={GAME_DOWNLOAD_WINDOWS} target='_blank'>
                <NavBarItem>
                    <NavBarItemText>Downloads</NavBarItemText>
                </NavBarItem>
            </StyledAnchor>

            <StyledNavLink to='/home'>
                <NavBarItem>
                    <NavBarItemText className='strike-through'>Air Drop</NavBarItemText>
                </NavBarItem>
            </StyledNavLink>
        </NavBar>
    );
}
 
export default Header;