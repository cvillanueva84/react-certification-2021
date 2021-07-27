import React from 'react';

import styled from 'styled-components';

const P = styled.p`
  color: grey;
  font-size: 1.1em;
`;

const Small = styled.p`
  color: grey;
  font-size: 0.5em;
`;

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-center">
        <P className="text-muted text-center">Luis F. Infanzón M.</P>
        <Small className="text-muted text-center">
          Wizeline Academy - 2021 React Bootcamp
        </Small>
      </div>
    </footer>
  );
};

export default Footer;
