import React from 'react';
import styled from 'styled-components';

const ControlGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: stretch;
    flex-direction: ${props => props.direction ? `${props.direction}` : 'column'};
`;

export default props => (
    <ControlGroup { ...props }>
        { props.children }
    </ControlGroup>
);