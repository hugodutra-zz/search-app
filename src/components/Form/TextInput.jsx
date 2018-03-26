import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    height: 20px;
    padding: 5px;
`;

export default props => (
    <TextInput { ...props } />
);