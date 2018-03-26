import React from 'react';
import styled from 'styled-components';

const ResultsWrapper = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export default props => (
    <ResultsWrapper>
        {props.children}
    </ResultsWrapper>
);