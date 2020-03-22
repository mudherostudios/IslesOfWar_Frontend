import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';
import { size } from '../../screen-sizes';
import { requestAirdrop } from '../../actions/airdrop';
import { GOOGLE_RECAPTCHA_KEY } from '../../config';

const StyledCard = styled(Card)`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    width: 30vw;
    margin: 5rem auto 0 auto;

    @media only screen and (max-width: ${size.laptopL}) {
        width: 43vw;
    }

    @media only screen and (max-width: ${size.mobileL}) {
        width: 100vw;
    }
`;

const StyledFormCard = styled(StyledCard)`
    margin: 2rem auto; 
    width: 20vw;
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

const StyledInputField = styled.input`
    background-color: transparent;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    padding: 0.6rem;
    font-size: 1.2rem;
    color: white;
    width: 90%;

    :not(:first-child) {
        margin-top: 1rem;
    }

    :focus {
        outline: none;
    }

    ::placeholder {
        color: white;
    }
`;

const StyledSubmitButton = styled.button`
    color: white;
    border-radius: 2rem;
    border: none;
    background-color: green;
    width: 60%;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;

    :hover {
        cursor: pointer;
    }

    :disabled {
        cursor: not-allowed;
        background-color: #949a94;
    }
`;

const ErrorText = styled.p`
    color: red;
    font-size: 1.2rem;
    margin-bottom: 0;
`;

const RecaptchaContainer = styled.div`
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
`;

const Airdrop = () => {
    const [airdropState, setAirdropState] = useState({
        email: '',
        verifyEmail: '',
        playerName: '',
        recaptchaToken: null
    });

    const [airdropRequest, setAirdropRequest] = useState({
        result: null,
        error: null
    });

    const onInputChange = (event) => {
        setAirdropState({
            ...airdropState,
            [event.target.name]: event.target.value
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        requestAirdrop({
            email: airdropState.email, 
            playerName: airdropState.playerName.replace(/^(p\/)/, '').trim(),
            recaptchaToken: airdropState.recaptchaToken
        })
        .then(response => {
            if (!response.error) {
                return setAirdropRequest({
                    ...airdropRequest, 
                    result: response
                });
            } 

            setAirdropRequest({
                ...airdropRequest,
                error: response.error,
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    const onRecaptchaChange = (recaptchaToken) => {
        setAirdropState({
            ...airdropState,
            recaptchaToken
        });
    };

    return (
        <>
            <StyledCard>
                <StyledCardBody>
                    <p>Request an airdrop by filling in the form below with a valid email address and your Xaya player name.</p>
                    <p>You will receive a one time free airdrop of over 15k in resources and warbux!</p>
                </StyledCardBody>
            </StyledCard>
            <StyledFormCard>
                <StyledCardBody>
                    {
                        airdropRequest.result ? (
                            <p>Your airdrop was successfully requested. A verification link has been sent to your email.</p>
                        ) : airdropRequest.error ? (
                            <p>{airdropRequest.error.message}</p>
                        ) : (
                            <form onSubmit={onFormSubmit}>
                                <StyledInputField type="text" name="email" value={airdropState.email} placeholder="Email" onChange={onInputChange} required />
                                <StyledInputField type="text" name="verifyEmail" value={airdropState.verifyEmail} placeholder="Verify Email" onChange={onInputChange} required />
                                <StyledInputField type="text" name="playerName" value={airdropState.playerName} placeholder="Xaya Player Name (without p/)" onChange={onInputChange} required />
                                {airdropState.email !== airdropState.verifyEmail && airdropState.verifyEmail.length > 0 ? (<ErrorText>Emails do not match</ErrorText>) : null}
                                <RecaptchaContainer>
                                    <ReCAPTCHA sitekey={GOOGLE_RECAPTCHA_KEY} onChange={onRecaptchaChange} required />
                                </RecaptchaContainer>
                                <StyledSubmitButton disabled={!airdropState.recaptchaToken}>Request Airdrop</StyledSubmitButton>
                            </form>
                        )
                    }
                </StyledCardBody>
            </StyledFormCard>
        </>
    );
}
 
export default Airdrop;