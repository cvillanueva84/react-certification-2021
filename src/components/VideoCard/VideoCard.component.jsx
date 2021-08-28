import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './VideoCard.css';

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 350,
  },
  media: {
    height: 140,
  },
});

const VideoCard = ({ value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={value.snippet.thumbnails.medium.url}
        />
        <CardContent>
          <Typography data-testid="card-title" gutterBottom variant="h5" component="h2">
            {value.snippet.title}
          </Typography>
          <Typography
            data-testid="card-description"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {value.snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default VideoCard;
