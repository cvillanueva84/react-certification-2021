import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Fill from '../Fill/Fill'

const HomeView = () => {



  return (
    <div>
      <Header/>

      <Fill/>

      <pre>
        <Link to="/"> ← go back</Link>
      </pre>
    </div>
  );
};

export default HomeView;
