import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 30px;
`;

export const Api = (props) => {
    const { description, api } = props;
    return (
        <Description>
          <Code>{api}</Code>
          {description}
          <img src={`https://s3.amazonaws.com/static.boldmetrics.com/measurement_images/${api}.png`} height="auto" width="80%"/>
        </Description>
    )
    };