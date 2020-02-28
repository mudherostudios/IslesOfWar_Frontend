import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: rgba(97, 97, 97, 0.5);
`;

const Card = ({children}) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
};

export default Card;