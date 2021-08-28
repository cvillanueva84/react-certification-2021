import React from 'react';
import Header from '../../components/Header/Header.component';
import './Home.styles.css';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../../components/VideoCard/VideoCard.component';

function HomePage(props) {
  return (
    <section className="homepage">
      <Header />

      <div className="divList">
        <h2 className="HomeTitle">Welcome to the Challenge!</h2>

        <Grid sx={{ flexGrow: 1 }} container spacing={3}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              {props.data.items.map((value) => (
                <Grid key={value} item>
                  <VideoCard value={value} key={value.etag} />
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
