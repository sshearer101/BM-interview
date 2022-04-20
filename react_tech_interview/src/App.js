import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Column = styled.div`
  width: 300px;
  margin: 20px;
  justify-content: center;
`

const Card = styled.div`
  width: 200px;
  outline: 5px solid black;
`

function App() {

  return (
    <h1>Hello World</h1>
  );
}

export default App;
