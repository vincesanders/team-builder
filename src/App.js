import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: 'Vincent Sanders',
      role: 'Software Engineer',
      email: 'vincesanders@hotmale.com'
    }
  ]);

  const addTeamMember = member => {
    const newMember = {
      name: member.name,
      role: member.role,
      email: member.email
    };
    setTeamList([...teamList, newMember]);
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} />
      <TeamMembers teamList={teamList} />
    </div>
  );
}

export default App;
