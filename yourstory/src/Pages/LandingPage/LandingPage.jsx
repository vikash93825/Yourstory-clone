import React, {useEffect} from 'react';

import { makeStyles } from "@material-ui/core/styles";
import {useDispatch, useSelector} from 'react-redux';
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
import SideCard from './SideCard'
import CardComponent from './CardComponent'
import styles from './LandingPage.module.css'
//import Carousel from 'react-elastic-carousel'

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
import BottomCard from './BottomCard';

const useStyles = makeStyles({
    root: {
        maxWidth: 650,
        
    },
    right:{
        paddingLeft: 100
    },
    media: {
        height: 340,
        borderRadius: 10
    },
    main: {
        paddingLeft: 120,
    },
});

const LandingPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSourceData())
    }, []);

    const source = useSelector(state => state.source)
    console.log(source)

    return (
        <div>
        <Grid container>
            <Grid item xs={12} md={8} lg={8} className={classes.main}>
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

            <Grid item xs={12} md={4} lg={4} >
                <Grid container >
                <Grid xs={6} md={12} lg={12} >
                    <SideCard/>
                </Grid>
                <Grid xs={6} md={12} lg={12} >
                <SideCard/>
                </Grid>
                <Grid xs={6} md={12} lg={12} >
                <SideCard/>
                </Grid>
                <Grid xs={6} md={12} lg={12} >
                <SideCard/>
                </Grid>
                </Grid>
            </Grid>
        </Grid>

        <BottomCard/>
        <BottomCard/>
        <BottomCard/>
        <BottomCard/>
        <BottomCard/>
    </div>
    );
}

export default LandingPage;
