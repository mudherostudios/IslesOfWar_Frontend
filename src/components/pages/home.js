import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';

const StyledCard = styled(Card)`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3rem;
    width: 30rem;
    margin: auto;
    position: relative;
    top: 30vh;
`;

const StyledCardBody = styled(CardBody)`
    color: #dedede;
    padding: 2rem;
    font-size: 1.2rem;

    > p:first-child {
        margin-top: 0;
    }

    > p:last-child {
        margin-bottom: 0;
    }
`;

const Home = () => {
    return (
        <>
            <StyledCard>
                <StyledCardBody>
                    <p>Sign up with your email and the Xaya Player Name you will be using. This will allow you to stay current on events and version updates.</p>
                    <p>More importantly though, you will also receive a one time FREE Airdrop of over 15k in resources and war bucks!</p>
                </StyledCardBody>
            </StyledCard>
        </>
    );
}
 
export default Home;