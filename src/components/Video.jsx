import React from 'react';

import styled from 'styled-components';

const P = styled.p`
  font-size: 0.5em;
`;

const Titulo = styled.p`
  font-size: 0.6em;
  font-weight: bold;
`;

function Video({ title, imagen, description, llave }) {
  return (
    <div role="listitem" key={llave} className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card h-100">
        <img src={imagen} className="img-fluid" alt={title} />
        <div className="card-body">
          <Titulo>{title}</Titulo>
          <P className="card-text">{description}</P>
        </div>
      </div>
    </div>
  );
}

export default Video;
