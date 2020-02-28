import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
`;

const Card = ({children, className}) => {
    return (
        <CardContainer className={className}>
            {children}
        </CardContainer>
    )
};

export default Card;