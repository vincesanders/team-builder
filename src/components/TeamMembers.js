import React from 'react';
import styled from 'styled-components';
import TeamMemberCard from './TeamMemberCard';

const MembersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default props => {
    return (
        <div>
            {props.teamList.map(member => <TeamMemberCard name={member.name} role={member.role} email={member.email} />)}
        </div>  
    );
}