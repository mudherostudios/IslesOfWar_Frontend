import React from 'react';
import styled from 'styled-components';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.footer`
    position: absolute;
    height: auto;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
`;

const CopyrightInfo = styled.div`
    margin-top: 1rem;
`;

const SocialMediaLinks = styled.div`
    margin: 1rem;

    svg:not(:first-child) {
        margin-left: 1rem;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #0a0a0a9e;

    :hover {
        cursor: pointer;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <CopyrightInfo>Copyright &copy; IslesOfWar {new Date().getFullYear()}</CopyrightInfo>
            <SocialMediaLinks>
                <StyledFontAwesomeIcon icon={faDiscord} size={'2x'} onClick={() => window.open('https://discord.gg/UERGtRq')} />
                <StyledFontAwesomeIcon icon={faTwitter} size={'2x'} onClick={() => window.open('https://twitter.com/MudHeroStudios')} />
            </SocialMediaLinks>
        </StyledFooter>
    );
};
 
export default Footer;