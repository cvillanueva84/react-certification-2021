import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import { VideoCard } from './Home.styled';
import youtubeData from '../../youtube-videos-mock';
import './Home.styles.css';

function HomePage() {
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
              {video.snippet.description || 'Este video no cuenta con descripción'}
            </span>
          </div>
        </VideoCard>
      ))}
    </section>
  );
}

export default HomePage;
