import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    text-align: left;
    width: 20%;
    background: #596273;
    color: white;
    padding-left: 1rem;
    padding-bottom: 0.25rem;
    margin: 2.5%;
    border-radius: 5px;
    border: 4px solid #282c34;
`

const Header = styled.h3`
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
`

const Role = styled.p`
    font-style: italic;
    margin-left: 2rem;
    font-size: 0.8rem;
    margin-top: -0.4rem;
`

export default props => {
    return (
        <Card>
            <Header>{props.name}</Header>
            <Role>{props.role}</Role>
            <p>{props.email}</p>
        </Card>
    );
}