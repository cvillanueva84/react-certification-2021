import React from 'react';
import styled from 'styled-components';

const SrchDivMain = styled.div`
  @media (min-width: 600px) {
    width: auto;
    margin-left: 24px;
  }
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

const SrchImgCont = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const SrchImg = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  svg:not(:root) {
    overflow: hidden;
  }
`;

const SrchCont = styled.div`
  color: inherit;
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
`;

const SrchInput = styled.input`
  width: 20ch;
  padding: 8px 8px 8px 0px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
  font: inherit;
  color: currentColor;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  ::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

function MySearch() {
  return React.createElement(
    SrchDivMain,
    { className: 'SrchDivMain' },
    React.createElement(
      SrchImgCont,
      { className: 'SrchImgCont' },
      React.createElement(
        SrchImg,
        {
          className: 'SrchImg',
          focusable: 'false',
          viewBox: '0 0 24 24',
          'aria-hidden': 'true',
        },
        React.createElement('path', {
          d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
        })
      )
    ),
    React.createElement(
      SrchCont,
      { className: 'SrchCont' },
      React.createElement(SrchInput, {
        className: 'SrchInput',
        placeholder: 'Search…',
        type: 'text',
        'aria-label': 'search',
      })
    )
  );
}

export { MySearch };
