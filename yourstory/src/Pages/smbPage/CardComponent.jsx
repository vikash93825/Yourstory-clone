import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
            flexGrow: 1,
            borderRadius: 10
        },
        media: {
            height: 140,
        },
        paper: {
            height: 240,
            width: 250,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));

export const CardComponent=({start_id,img_url, description, category,title}) =>{
    const classes = useStyles();
    const history = useHistory()
    const handleClick=()=>{
        history.push(`/story/${start_id}`)
    }
    return (
        <div className={classes.root} onClick={handleClick}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img_url}
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                    <Typography gutterBottom variant="p" component="p" style={{}}>
                        02/02/2021
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                    </CardContent>
                    
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="secondry" style={{color:"#f23f2d",background:"#fff5f4"}}>
                        {category}
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
