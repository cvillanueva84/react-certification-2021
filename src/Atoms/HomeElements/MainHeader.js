import styled from 'styled-components';

const Header = styled.header`
  color: #fff;
  background-color: #1c5476;
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const HeaderDiv = styled.div`
  @media (min-width: 600px) {
    min-height: 56px;
  }
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 64px;
  }
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  min-height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  position: relative;
  align-items: center;
`;

export { Header, HeaderDiv };
