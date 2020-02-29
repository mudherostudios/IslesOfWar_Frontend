import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';

const Logo = styled.img`
    display: block;
    position: relative;
    margin: auto;
    width: 50%;
    top: 10vh;
`;

const StyledCard = styled(Card)`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    width: 30rem;
    margin: auto;
    position: relative;
    top: 20vh;
`;

const StyledCardBody = styled(CardBody)`
    color: #dedede;
    padding: 2rem;
    font-size: 1.5rem;
`;

const Button = styled.div`
    background-color: green;
    border-radius: 3rem;
    width: 80%;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
    
    :hover {
        cursor: pointer;
    }
`;

const StyledDownloadCard = styled(Card)`
    background-color: transparent;
    width: 30rem;
    margin: auto;
    position: relative;
    top: 22vh;
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

const Home = () => {
    return (
        <>
            <Logo src='../../../public/images/iow_logo.png'></Logo>
            
            <StyledCard>
                <StyledCardBody>
                    <Button>Get FREE Air Drop</Button>
                </StyledCardBody>
            </StyledCard>
            <StyledDownloadCard>
                <StyledDownloadCardBody>
                    <StyledDownloadCardTitle>Download Now</StyledDownloadCardTitle>
                    <DownloadButton>
                        <DownloadButtonImage src='../../../public/images/windows_logo.png'></DownloadButtonImage>
                        <DownloadButtonText>WINDOWS</DownloadButtonText>
                    </DownloadButton>
                </StyledDownloadCardBody>
            </StyledDownloadCard>
        </>
    );
}
 
export default Home;