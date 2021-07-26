import React, { useRef } from 'react';
import styled from 'styled-components';
import YoutubeMock from '../../mock/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 20px;
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.body};
`;

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
    <Section className="homepage" ref={sectionRef}>
      {/* <h2>Welcome</h2> */}
      <Grid>
        {YoutubeMock.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((video) => (
            <VideoCard key={video.etag} video={video} />
          ))}
      </Grid>
      {/* {authenticated ? (
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
    </Section>
  );
}

export default HomePage;
