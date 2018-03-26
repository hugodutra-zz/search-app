import React from 'react';
import styled from 'styled-components';
import { H2, P } from '../Text';

const ResultsItem = styled.li`
    display: flex;
    flex: 1;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 10px 0;
`;

export default props => (
    <ResultsItem>
        <H2>{ props.title }</H2>
        <P>Price: ${ props.price }</P>
        <P>Rating: { props.rating }</P>
    </ResultsItem>
);