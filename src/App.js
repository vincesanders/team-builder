import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const MainPage = styled.div`

`

function App() {
  const [teamList, setTeamList] = useState([]);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
