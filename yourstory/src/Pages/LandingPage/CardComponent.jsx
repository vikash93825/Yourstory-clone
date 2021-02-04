import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography } from "@material-ui/core";

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

export const CardComponent=({img_url, description, category}) =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                        {description}
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
