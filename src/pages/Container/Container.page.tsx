import React from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import HomeView from '../../components/HomeView';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  background: hsl(0, 0%, 95%);
`;
const Main = styled.div`
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: white;
  
  @media (min-width: 1068px) {
    border-radius: 1rem;
    margin: 4rem 4rem 4rem 0;
    /* margin: 4rem 4rem 0 0; */
  }
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
