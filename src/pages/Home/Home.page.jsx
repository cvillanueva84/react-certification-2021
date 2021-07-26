import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

import { data } from '../../mock/youtube-videos-mock'

import CardItem from '../../components/Cards/CardItem'
import Grid from '@material-ui/core/Grid'

import useStyles from './styles'

function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
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
          <div className="card-container">
            <Grid container className={classes.root} spacing={2} >
              {
                data[0].items.map(content => (
                  <Grid item style={{display: 'flex', flexWrap: 'wrap'}}>
                    <CardItem
                      img={content.snippet.thumbnails.high.url}
                      title={content.snippet.title}
                      description={content.snippet.description}
                      className="card"
                    />
                  </Grid>
                ))
              }
            </Grid>
          </div>
      )}
    </section>
  );
}

export default HomePage;
