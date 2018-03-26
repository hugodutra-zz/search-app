import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
    border: 0;
    background-color: #00aeef;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`;

export default props => (
    <SubmitButton { ...props }>
        {props.children}
    </SubmitButton>
);