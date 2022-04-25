import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import styled from 'styled-components';
import { Nav, Api } from '../components';
import { measurementGuide } from '../config';

const Container = styled.div`
  font-family: microgamma, avenir, sans;
  margin: 30px 0;
  justifyContent: space-between;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: x-large;
  margin: 30px;
`;

const Canvas = styled.div`
  display: flex;
  flex-direction: row;
`;


export const App = () => {
  const createPath = (measurementGuideArray) => {
    return measurementGuideArray.map(a => {
      return <Route exact path={`/${a.api}`} render={() => <Api api={a.api} description={a.description} />} />
    })
  }
  return (
    <HashRouter>
      <Container>
      <Title>Measurement Guide</Title>
      <Canvas>
        <Nav/>
        <Switch>
          {createPath(Object.entries(measurementGuide))}
          <Redirect from='/' to='/acromion_height'/>
        </Switch>
      </Canvas>
      </Container>
    </HashRouter>
  );
}
