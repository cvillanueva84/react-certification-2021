/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from '../../context/State/state';

import './Toggle.styles.css';

const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const SpanTag = styled.span`
  margin-left: 1vw;
  color: white;
`;

const Toggle = () => {
  const stateContext = useContext(StateContext);
  const { darkMode, handleDarkMode } = stateContext;
  return (
    <Container onChange={() => handleDarkMode(darkMode)}>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <SpanTag>Dark Mode</SpanTag>
    </Container>
  );
};

export default Toggle;
