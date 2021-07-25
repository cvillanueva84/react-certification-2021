import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function VideoCard({ videoInfo }) {
  const useIconStyles = makeStyles({
    cardImage: {
      width: '100%',
      height: '200px',
      backgroundImage: `url(${videoInfo.thumbnails.high.url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      '&:hover': {
        opacity: '0.8',
        cursor: 'pointer',
      },
    },
    title: {
      margin: '5px',
      fontSize: '14px',
    },
    description: {
      padding: '5px',
      fontSize: '10px',
    },
  });

  const classes = useIconStyles();

  return (
    <Paper
      elevation={3}
      style={{ height: '300px', width: '300px', margin: '20px', paddingBottom: '20px' }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ padding: '0px' }}
      >
        <Grid item>
          <img
            src={videoInfo.thumbnails.high.url}
            className={classes.cardImage}
            alt={videoInfo.Title}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            {videoInfo.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.description}>
            {videoInfo.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
