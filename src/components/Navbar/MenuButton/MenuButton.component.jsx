import React from 'react';
import styled from 'styled-components';

const MenuButton = (props) => {
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.button`
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5em;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px 0 0 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    background-color: white;
    position: relative;
    transform-origin: 1px;
  }
`;

export default MenuButton;
