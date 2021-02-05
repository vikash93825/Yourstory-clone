import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch, useSelector} from 'react-redux';
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
import SideCard from './SideCard'
import CardComponent from './CardComponent'
import styles from './LandingPage.module.css'
import BottomCard from './BottomCard';

import HeadingContent from './HeadingContent';
import { Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography,Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 650,
        
    },
    pad: {
        width: 650,
        paddingLeft: "10%",
        '& > *':{
            marginBottom: 10,
        }
    },
    pad2: {
        width: 500,
        '& > *':{
            marginBottom: 10,
        }
    },
    paper: {
        width: 550,
        '& > *':{
            marginBottom: 10,
        }
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

    //getting source data from database
    const source = useSelector(state => state.app.source)
    const unionBudget = source.filter((item)=> item.category == "unionBudget")

    return (
    <div>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
                <Grid item className={classes.pad}>
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
                                <Typography variant="h6" style={{fontWeight:"bold"}} component="h1">
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
                <Grid item className={classes.pad2} >
                    <div style={{marginTop: "-10%", marginBottom:"-2%"}}>
                        <HeadingContent head="Union Budget 2021" para="Featuring Budget 2021 Stories" />
                    </div>
                    {
                        unionBudget.map((item)=> <SideCard {...item} />)
                    }
                </Grid>
            </Grid>
        </Grid>
        <BottomCard/>
    </div>
    );
}

export default LandingPage;
