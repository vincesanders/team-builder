import React, { useState } from 'react';
import styled from 'styled-components';
import { checkPropTypes } from 'prop-types';

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

export default props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMember(member);
        setMember({name: '', email: '', role: ''});
    }

    return (
        <FormContainer onSubmit={submitForm}>
            <label htmlFor='name' >Full Name</label>
            <Input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges} />
            <label htmlFor='email' >E-Mail</label>
            <Input id='email' type='email' name='email' placeholder='member@email.com' onChange={handleChanges} />
            <label htmlFor='role' >Role</label>
            <Input id='role' type='text' name='role' placeholder="Member's role" onChange={handleChanges} />
            <button type='submit'>Add Team Member</button>
        </FormContainer>
    );
}