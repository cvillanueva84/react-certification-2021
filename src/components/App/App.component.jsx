import React from 'react';

import HomePage from '../../pages/Home';
import Content from '../Content/Content.component';
import Header from '../Header';
import Layout from '../Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <HomePage />
      </Content>
    </Layout>
  );
}

export default App;
