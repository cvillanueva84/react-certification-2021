import React, { useRef } from "react";
import Header from '../../components/Header/Header.component';
import Content from '../../components/Content/Content.component'

import './Home.styles.css';

function HomePage() {

  const sectionRef = useRef(null);

  return (
    <>
      <Header />
      <section className="homepage" ref={sectionRef}>
        <div>
          <h1>Welcome to the Challenge #1!</h1>
          <Content/>
        </div>
      </section>
    </>
  );
}

export default HomePage;
