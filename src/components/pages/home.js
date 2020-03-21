import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';
import { size } from '../../screen-sizes';
import { GAME_DOWNLOAD_WINDOWS } from '../../constants';
import IslesOfWarLogo from '../../images/iow_logo.png';
import WindowsLogo from '../../images/windows_logo.png';

const Logo = styled.img`
    display: block;
    position: relative;
    margin: auto;
    width: 34%;
    top: 10vh;

    @media only screen and (max-width: ${size.tablet}) {
        width: 80vw;
    }
`;

const StyledCard = styled(Card)`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    width: 30vw;
    margin: 10rem auto 0 auto;

    @media only screen and (max-width: ${size.laptopL}) {
        width: 43vw;
    }

    @media only screen and (max-width: ${size.mobileL}) {
        width: 100vw;
    }
`;

const StyledCardBody = styled(CardBody)`
    color: #dedede;
    padding: 2rem;
    font-size: 1.5rem;
    text-align: center;

    @media only screen and (max-width: ${size.mobileS}) {
        font-size: 1.4rem;
    }
`;

const AirDropButton = styled.div`
    background-color: green;
    border-radius: 3rem;
    padding: 0.5rem;
    text-align: center;
    
    :hover {
        cursor: pointer;
    }
`;

const StyledDownloadCard = styled(Card)`
    background-color: transparent;
    width: 30rem;
    margin: 2rem auto 0 auto;

    @media only screen and (max-width: ${size.tablet}) {
        width: 100vw;
    }
`;

const StyledDownloadCardBody = styled(CardBody)`
    color: #dedede;
    padding: 1rem;
    font-size: 1.4rem;
    text-align: center;

    p {
        margin: 0;
    }
`;

const StyledDownloadCardTitle = styled.div`
    color: black;
    font-size: 1.8rem;
`;

const DownloadButton = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3rem;
    width: 50%;
    letter-spacing: 0.2rem;
    font-size: 1.4rem;
    padding: 0.7rem;
    position: relative;
    margin: 1rem auto;

    :hover {
        cursor: pointer;
    }

    @media only screen and (max-width: ${size.mobileL}) {
        width: 100%;
    }
`;

const DownloadButtonImage = styled.img`
    display: inline-block;
    width: 10%;
    margin: auto;
    position: relative;
    top: 0.2rem;
`;

const DownloadButtonText = styled.div`
    display: inline-block;
    padding-left: 0.5rem;
`;

const DownloadButtonAnchor = styled.a`
    color: #dedede;

    :visited {
        color: inherit;
    }

    :hover {
        color: inherit;
    }

    :active {
        color: inherit;
    }
`;

const Home = ({history}) => {
    const onAirdropButtonClick = () => {
        history.push('/airdrop');
    };

    return (
        <>
            <Logo src={IslesOfWarLogo}></Logo>
            <StyledCard>
                <StyledCardBody>
                    <AirDropButton onClick={onAirdropButtonClick}>Get FREE Air Drop</AirDropButton>
                </StyledCardBody>
            </StyledCard>
            <StyledDownloadCard>
                <StyledDownloadCardBody>
                    <StyledDownloadCardTitle>Download Now</StyledDownloadCardTitle>
                    <DownloadButtonAnchor href={GAME_DOWNLOAD_WINDOWS} target='_blank'>
                        <DownloadButton>
                            <DownloadButtonImage src={WindowsLogo}></DownloadButtonImage>
                            <DownloadButtonText>WINDOWS</DownloadButtonText>
                        </DownloadButton>
                    </DownloadButtonAnchor>
                </StyledDownloadCardBody>
            </StyledDownloadCard>
        </>
    );
}
 
export default Home;