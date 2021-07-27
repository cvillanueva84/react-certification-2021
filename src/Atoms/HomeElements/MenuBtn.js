import React from 'react';
import styled from 'styled-components';

const MenuBtn = styled.button`
  margin-right: 16px;
  color: inherit;
  margin-left: -12px;
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

const MenuBtnSpan = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const MenuBtnSvg = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

function MyBtn() {
  return React.createElement(
    MenuBtn,
    {
      className: 'MenuBtn',
      tabindex: '0',
      type: 'button',
      'aria-label': 'open drawer',
    },
    React.createElement(
      MenuBtnSpan,
      { className: 'MenuBtnSpan' },
      React.createElement(
        MenuBtnSvg,
        {
          className: 'MenuBtnSvg',
          focusable: 'false',
          viewBox: '0 0 24 24',
          'aria-hidden': 'true',
        },
        React.createElement('path', {
          d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
        })
      )
    )
  );
}

export { MyBtn };
