import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
    padding: 1rem;
`;

const CardBody = ({children, className}) => {
    return (
        <StyledCardBody className={className}>
            {children}
        </StyledCardBody>
    )
};

export default CardBody;