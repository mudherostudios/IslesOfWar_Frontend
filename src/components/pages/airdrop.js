import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';
import { size } from '../../screen-sizes';

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
    margin-top: 1.8rem;
    margin-left: auto;
    margin-right: auto;

    :hover {
        cursor: pointer;
    }
`;

const ErrorText = styled.p`
    color: red;
    font-size: 1.2rem;
    margin-bottom: 0;
`;

const Airdrop = () => {
    const [airdropState, setAirdropState] = useState({
        email: '',
        verifyEmail: '',
        playerName: ''
    });

    const onInputChange = (event) => {
        setAirdropState({
            ...airdropState,
            [event.target.name]: event.target.value
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        // API call here
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
                    <form onSubmit={onFormSubmit}>
                        <StyledInputField type="text" name="email" placeholder="Email" onChange={onInputChange} required />
                        <StyledInputField type="text" name="verifyEmail" placeholder="Verify Email" onChange={onInputChange} required />
                        <StyledInputField type="text" name="playerName" placeholder="Xaya Player Name" onChange={onInputChange} required />
                        {airdropState.email !== airdropState.verifyEmail && airdropState.verifyEmail.length > 0 ? (<ErrorText>Emails do not match</ErrorText>) : null}
                        <StyledSubmitButton>Request Airdrop</StyledSubmitButton>
                    </form>
                </StyledCardBody>
            </StyledFormCard>
        </>
    );
}
 
export default Airdrop;