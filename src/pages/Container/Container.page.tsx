import React from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import HomeView from '../../components/HomeView';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  background: #f7f9f8;
`;
const Main = styled.div`
  @media(min-width: 1068px) {
    margin: 4rem 4rem 4rem 0;
  }
  width: 100%;
  border-radius:  0 0 1rem 1rem;
  background-color: white;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); */
`;

function Container() {
  return (
    <Content>
      <SideBar />
      <Main>
        <Header />
        <HomeView />
      </Main>
    </Content>
  );
}

export default Container;
