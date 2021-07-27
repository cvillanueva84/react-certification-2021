import React from 'react';
import styled from 'styled-components';

const ProfileBtn = styled.button`
  color: inherit;
  margin-right: -12px;
  flex: 0 0 auto;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;

const ProfBtnSpan = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const ProfBtnDiv = styled.div`
  color: #fff;
  background-color: #bdbdbd;
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
`;

const ProfBtnSvg = styled.svg`
  width: 75%;
  height: 75%;
  fill: currentColor;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

function MyProfBtn() {
  return React.createElement(
    ProfileBtn,
    {
      className: 'ProfileBtn',
      tabindex: '0',
      type: 'button',
      'aria-label': 'account of current user',
      'aria-haspopup': 'true',
    },
    React.createElement(
      ProfBtnSpan,
      { className: 'ProfBtnSpan' },
      React.createElement(
        ProfBtnDiv,
        {},
        React.createElement(
          ProfBtnSvg,
          { focusable: 'false', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
          React.createElement('path', {
            d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          })
        )
      )
    )
  );
}

export { MyProfBtn };
