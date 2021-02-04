import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
} from "@material-ui/core";

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

    

export const CardComponent=({img_url}) =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Grid item container >
                <Grid xs={12} md={6} lg={3}>
                    {/* {[0, 1, 2, 3].map((value) => (
                        <Grid key={value} item>
                        <Paper className={classes.paper}> */}
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
                                    Budget 2021 positions India towards its target of $5T economy: USISPF
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="secondry" style={{color:"#f23f2d",background:"#fff5f4"}}>
                                    UNION BUDGET
                                </Button>
                                </CardActions>
                            </Card>
                        {/* </Paper>
                        </Grid>
                    ))} */}
                    {/* </Grid>
                </Grid> */}
        </div>
    );
}
