import React from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  background: #f7f9f8;
`;
const Main = styled.div`
  padding: 4rem 0;
  width: 100%;
  border-radius: 2rem;
`;

function Container() {
  return (
    <Content>
      <SideBar />
      <Main>
        <Header />
      </Main>
    </Content>
  );
}

export default Container;
