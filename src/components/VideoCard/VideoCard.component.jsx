import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './VideoCard.styles.css';

const useStyles = makeStyles({
    root: {
        width: 345,
        height: 350
    },
    media: {
        height: 140,
    },
});

function VideoCard(props) {

    const classes = useStyles();
    console.log("props", props.value)
    const [state, setState] = React.useState({
        image: props.value.snippet.thumbnails.medium,
        title: props.value.snippet.title,
        description: props.value.snippet.description
    });
    console.log(state.image)

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={state.image.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {state.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {state.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>
        </Card>
    );
}

export default VideoCard;
