import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-right: ${ props => props.isFirst ? '20px' : '0'}
`;

export default props => (
    <FieldWrapper { ...props }>
        {props.children}
    </FieldWrapper>
);