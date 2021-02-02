import React from 'react';
import Carousal from './Carousal';
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles({
    root: {
        maxWidth: 650,
    },
    media: {
        height: 340,
    },
    main: {
        paddingLeft: 120,
    }
});

const LandingPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {/* <Carousal/> */}
            <Grid xs={8} md={8} className={classes.main}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.yourstory.com/cs/2/77e43870d62911eaa8e9879653a67226/FM1-1612087221141.png?fm=png&auto=format&ar=2:1&mode=crop&crop=face"
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
            </Grid>

            <Grid xs={4} md={4}>
                <Card className={classes.root}>
                    
                </Card>
            </Grid>
        </Grid>
    );
}

export default LandingPage;
