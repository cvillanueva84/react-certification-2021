import React, { useRef } from 'react';

import HomeView from '../../components/HomeView';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <HomeView />
    </section>
  );
}

export default HomePage;
