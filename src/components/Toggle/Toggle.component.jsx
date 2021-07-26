import React from 'react';
import styled from 'styled-components';

const StyledToggle = styled.label`
  position: relative;
  display: block;
  width: 65px;
  height: 25px;

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.accent};
    border-radius: 35px;
    transition: 0.5s;
    border: solid 2px rgba(0, 0, 0, 0.1);

    &::before {
      position: absolute;
      content: '';
      width: 40%;
      height: 100%;
      border-radius: 50px;
      background-color: #ecec03;
      box-shadow: 0px 0px 8px 5px yellow;
      transition: 0.5s;
    }
  }

  input {
    display: none;
  }

  input:checked + span {
    background-color: ${(props) => props.theme.accent};
  }
  input:checked + span::before {
    transform: translateX(150%);
    background-color: #f4f1c9;
    box-shadow: 0px 0px 8px 2px white;
  }
`;

const Toggle = ({ action }) => {
  return (
    <StyledToggle>
      <input type="checkbox" onChange={action} />
      <span data-testid="Toggle" />
    </StyledToggle>
  );
};

export default Toggle;
