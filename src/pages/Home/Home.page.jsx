import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import styled from 'styled-components';
import youtubeData from '../../youtube-videos-mock';
import './Home.styles.css';

const VideoCard = styled.div`
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 345px;
  margin: 15px;

  .videoTextContainer {
    padding: 16px;
  }
  .videoCardMedia {
    height: 140px;
    object-fit: cover;
    width: 100%;
  }
  .videoCardTitle {
    margin: 0;
    font-size: 1.25rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    margin-bottom: 0.35em;
  }
  .videoCardDescription {
    font-size: 0.875rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.54);
  }
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

export const HomePage = () => {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <section className="homepage" ref={sectionRef}>
      {/* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
      {youtubeData.items.map((video) => (
        <VideoCard key={video.etag}>
          <img
            className="videoCardMedia"
            src={video.snippet.thumbnails.high.url}
            alt={video.kind}
          />
          <div className="videoTextContainer">
            <h3 className="videoCardTitle">{video.snippet.title}</h3>
            <span className="videoCardDescription">
              {video.snippet.description
                ? video.snippet.description
                : 'Este video no cuenta con descripción'}
            </span>
          </div>
        </VideoCard>
      ))}
    </section>
  );
};

export default HomePage;
