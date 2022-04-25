import React from 'react';
import styled from 'styled-components';
import { measurementGuide } from '../config';
import { Link } from 'react-router-dom'

const Container = styled.div`
  font-family: microgamma, avenir, sans;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 30px;
  width: 30%;
`;

const StyledLink = styled(Link)`
  font-family: microgamma, avenir, sans;
  color: #46347e;
  &:hover { color: #7c68b4; font-weight: bolder; } 
`;

export const Nav = () => {
  
  const createLink = (measurementGuideArray) => {
    return measurementGuideArray.map((a, i) => {
      return <StyledLink key={i} to={`/${a[1].api}`} >{a[0]}</StyledLink>
    }) 
  }

  return (
  <Container>
    {createLink(Object.entries(measurementGuide))}
  </Container>
  )
};
