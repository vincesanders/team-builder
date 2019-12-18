import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const MainPage = styled.div`

`

function App() {
  const [teamList, setTeamList] = useState([]);

  const addTeamMember = member => {
    setTeamList(...teamList, member);
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
