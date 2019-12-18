import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 50px;
`

const Input = styled.input`
    width: 400px;
    margin-bottom: 1rem;
`

export default () => {
    return (
        <FormContainer>
            <label htmlFor='name' >Full Name</label>
            <Input id='name' type='text' name='name' placeholder='Full Name' />
            <label htmlFor='email' >E-Mail</label>
            <Input id='email' type='email' name='email' placeholder='member@email.com' />
            <label htmlFor='role' >Role</label>
            <Input id='role' type='text' name='role' placeholder="Member's role" />
            <button>Add Team Member</button>
        </FormContainer>
    );
}