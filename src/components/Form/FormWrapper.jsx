import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 15px;
    margin-right: 20px;
    border: 1px solid #00aeef;
    border-radius: 3px;
`;

export default props => (
    <FormWrapper onSubmit={ props.onSubmit }>
        {props.children}
    </FormWrapper>
);