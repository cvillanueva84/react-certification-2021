import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header.component'
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../../components/VideoCard/VideoCard.component'

function HomePage(props) {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  console.log(props.data)


  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <Header />

      <div className="divList">
        <h2 className="HomeTitle">Welcome to the Challenge!</h2>

        <Grid sx={{ flexGrow: 1 }} container spacing={3}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              {props.data.items.map((value) => (
                <Grid key={value} item>
                  <VideoCard value={value} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>

    </section>
  );
}

export default HomePage;
