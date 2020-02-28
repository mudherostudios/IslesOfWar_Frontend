import React from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import CardBody from '../card/card-body';

const StyledCardBody = styled(CardBody)`
    color: #dedede;
`;

const Home = () => {
    return (
        <Card>
            <StyledCardBody>Hello world!</StyledCardBody>
        </Card>
    );
}
 
export default Home;