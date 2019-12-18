import React from 'react';

export default props => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.role}</p>
            <p>{props.email}</p>
        </div>
    );
}