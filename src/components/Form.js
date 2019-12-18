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

const Label = styled.label`
    color: white;
    font-size: 1.6rem;
`

const Input = styled.input`
    width: 400px;
    margin-bottom: 1rem;
    background: #596273;
    color: white;
    font-size: 1.6rem;
    border: none;
    line-height: 2;
    border-radius: 5px;
    padding: 0.5rem;
`

const SubmitButton = styled.button`
    margin: 2rem auto 0 auto;
    background-color: #596273;
    color: #fff;
    font-size: 1.6rem;
    border: 2px solid transparent;
    text-decoration: none;
    border-radius: 5px;
    padding: 0.5rem;
    &:hover {
        border: 2px solid white;
        background-color: #282c34;
    }
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
            <Label htmlFor='name' >Full Name</Label>
            <Input id='name' type='text' name='name' placeholder='  Full Name' onChange={handleChanges} />
            <Label htmlFor='email' >E-Mail</Label>
            <Input id='email' type='email' name='email' placeholder='  member@email.com' onChange={handleChanges} />
            <Label htmlFor='role' >Role</Label>
            <Input id='role' type='text' name='role' placeholder="  Member's role" onChange={handleChanges} />
            <SubmitButton type='submit'>Add Team Member</SubmitButton>
        </FormContainer>
    );
}