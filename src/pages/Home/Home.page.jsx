import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';
import { VideoCard } from './Home.styled';
import { VideoCardContent } from '../../components/VideoCardContent/VideoCardContent.component';
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
          <VideoCardContent video={video} />
        </VideoCard>
      ))}
    </section>
  );
}

export default HomePage;
