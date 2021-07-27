import React from 'react';
import styled from 'styled-components';

const contDivSnd = styled.div`
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  width: 345px;
  height: 345px;
  margin: 10px;
`;

const contBtn = styled.button`
  width: 100%;
  display: block !important;
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;

const contBtnDiv = styled.div`
  //background-image: url(https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg);
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
  width: 100%;
`;

const contDivText = styled.div`
  padding: 16px;
`;

const contH2 = styled.h2`
  margin-bottom: 0.35em;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin: 0;
`;

const contP = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  margin: 0;
`;

const contSpan = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: inherit;
  pointer-events: none;
  background-color: currentcolor;
`;

const contSpanSnd = styled.span`
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

function HomeContent(props) {
  return React.createElement(
    contDivSnd,
    {},
    React.createElement(
      contBtn,
      { tabindex: '0', type: 'button' },
      React.createElement(contBtnDiv, {
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        style: {
          backgroundImage: `url(${props.item.snippet.thumbnails.high.url})`,
        },
      }),
      React.createElement(
        contDivText,
        {},
        React.createElement(contH2, {}, 'Video Tour | Welcome to Wizeline Guadalajara'),
        React.createElement(
          contP,
          {},
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
        )
      ),
      React.createElement(contSpan),
      React.createElement(contSpanSnd)
    )
  );
}

export default HomeContent;
