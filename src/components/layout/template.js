import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from '../../router';
import Header from './header';
import Footer from './footer';
import BambooGothic from '../../fonts/BambooGothic-Book.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'BambooGothic';
        src: local('BambooGothic'), url(${BambooGothic}) format('truetype');
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-image: url('../public//images//background.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #2BBAD7;
        margin: 0;
    }
`;

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`;

const ContentContainer = styled.div`
    padding-bottom: 2.5rem;
`;

const Template = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <ContentContainer>
                    <Router />
                </ContentContainer>
                <Footer />
            </Container>
        </>
    );
}
 
export default Template;