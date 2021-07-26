import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import useStyles from './styles'


function CardItem({ img, title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h2" align="left">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="left">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
        </CardActions>
      </CardActionArea>
      
    </Card>
  );
}

export default CardItem;
