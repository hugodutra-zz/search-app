import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 16px;
    line-height: 18px;
    font-family: 'Roboto', sans-serif;
    color: #4E4E4F;
    display: block;
    margin-bottom: 5px;
`;

export default props => (
    <Label htmlFor={ props.htmlFor }>
        { props.children }
    </Label>
);