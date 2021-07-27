import React from 'react';
import styled from 'styled-components';
import { MyProfBtn } from './ProfileBtn';

const DarkMDiv = styled.div`
  @media (min-width: 960px) {
    display: flex;
  }
  display: none;
`;

const DarkMLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -11px;
  margin-right: 16px;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
`;

const DarkMSpan = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
`;

const DarkMSpanSnd = styled.span`
  top: 0;
  left: 0;
  color: #fafafa;
  z-index: 1;
  position: absolute;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 9px;
  flex: 0 0 auto;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;

const DarkMSpanTrd = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const DarkMInput = styled.input`
  left: -100%;
  width: 300%;
  top: 0;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
`;

const DarkMSpanFourth = styled.span`
  width: 20px;
  height: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  background-color: currentColor;
`;

const DarkMSpanTrdSnd = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
`;

const DarkMSpanSndSnd = styled.span`
  width: 100%;
  height: 100%;
  opacity: 0.38;
  z-index: -1;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 7px;
  background-color: #000;
`;

const DarkMSpanFstSnd = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin: 0;
`;

function MyDarkMode() {
  return React.createElement(
    DarkMDiv,
    { className: 'DarkMDiv' },
    React.createElement(
      'div',
      {},
      React.createElement(
        DarkMLabel,
        { className: 'DarkMLabel' },
        React.createElement(
          DarkMSpan,
          { className: 'DarkMSpan' },
          React.createElement(
            DarkMSpanSnd,
            { className: 'DarkMSpanSnd', 'aria-disabled': 'false' },
            React.createElement(
              DarkMSpanTrd,
              { className: 'DarkMSpanTrd' },
              React.createElement(DarkMInput, {
                className: 'DarkMInput',
                name: 'darkMode',
                type: 'checkbox',
                'aria-label': 'secondary checkbox',
              }),
              React.createElement(DarkMSpanFourth, { className: 'DarkMSpanFourth' })
            ),
            React.createElement(DarkMSpanTrdSnd, { className: 'DarkMSpanTrdSnd' })
          ),
          React.createElement(DarkMSpanSndSnd, { className: 'DarkMSpanSndSnd' })
        ),
        React.createElement(
          DarkMSpanFstSnd,
          { className: 'DarkMSpanSndSnd' },
          'Dark mode'
        )
      ),
      React.createElement(MyProfBtn)
    )
  );
}

export { MyDarkMode };
