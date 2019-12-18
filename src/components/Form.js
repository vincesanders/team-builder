import React from 'react';

export default () => {
    return (
        <form>
            <label htmlFor='name' >Full Name</label>
            <input id='name' type='text' name='name' placeholder='Full Name' />
            <label htmlFor='email' >E-Mail</label>
            <input id='email' type='email' name='email' placeholder='member@email.com' />
            <label htmlFor='role' >Role</label>
            <input id='role' type='text' name='role' placeholder="Member's role" />
            <button>Add Team Member</button>
        </form>
    );
}