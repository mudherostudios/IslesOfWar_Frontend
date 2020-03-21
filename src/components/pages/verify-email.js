import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';
import { size } from '../../screen-sizes';
import { verifyEmail } from '../../actions/airdrop';

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
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;

    @media only screen and (max-width: ${size.mobileS}) {
        font-size: 1.4rem;
    }
`;

const VerifyEmail = ({location}) => {
    const [verifyEmailState, setVerifyEmailState] = useState({
        result: null,
        error: null
    });

    useEffect(() => {
        const urlParameters = new URLSearchParams(location.search);

        verifyEmail({
            emailToken: urlParameters.get('emailToken'), 
            playerName: urlParameters.get('playerName')
        })
        .then(response => {
            if (!response.error) {
                return setVerifyEmailState({
                    ...verifyEmailState, 
                    result: response
                });
            } 

            setVerifyEmailState({
                ...verifyEmailState,
                error: response.error,
            });
        })
        .catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <>
            <StyledCard>
                <StyledCardBody>
                {
                    verifyEmailState.error ? (
                        <>
                            <p>An error occurred when attempting to verify your email. Please try again or alternatively, message us on Discord.</p>
                            <p>{verifyEmailState.error.message}</p>
                        </>
                    ) : verifyEmailState.result ? (
                        <p>Your email has been successfully verified. You should receive your airdrop soon.</p>
                    ) : <p>Verifying your email...</p>
                }
                </StyledCardBody>
            </StyledCard>
        </>
    );
}
 
export default VerifyEmail;