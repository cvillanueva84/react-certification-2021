import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;
const Description = styled.div`
  font-size: 0.7rem;
`;

function VideoDetailsView() {
  const { id } = useParams();
  const location = useLocation();
  const { videoTitle, videoDescription } = location.state;
  const url = 'https://www.youtube.com/embed/' + id;
  return (
    <section>
      <pre>
        <Link to="/"> ← go back</Link>
      </pre>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <Title>{videoTitle}</Title>
      <Description>{videoDescription}</Description>
    </section>
  );
}

export default VideoDetailsView;
