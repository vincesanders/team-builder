import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';


const MainPage = styled.div`

`

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: 'Vincent Sanders',
      role: 'Software Engineer',
      email: 'vincesanders@hotmale.com'
    }
  ]);

  const addTeamMember = member => {
    setTeamList(...teamList, member);
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} />
      <TeamMembers teamList={teamList} />
    </div>
  );
}

export default App;
