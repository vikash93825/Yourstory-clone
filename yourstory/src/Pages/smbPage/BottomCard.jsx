import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from './LandingPage.module.css'
import CardComponent from './CardComponent'
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
    right:{
        paddingRight: 100
    },
    media: {
        height: 340,
        borderRadius: 10
    },
    main: {
        paddingLeft: 120,
        paddingTop:70
    },
});

const BottomCard = () => {
    const classes = useStyles();
    return (
        
        <Grid className={classes.main}>
            <div className={styles.stcard} >
                <img src="https://images.yourstory.com/assets/icons/ic_startup.svg" width="50px" />
                <div>
                    <div className={styles.head} >Startup</div>
                    <div>Deep-dive stories of changemakers and innovators from the startup ecosystem</div>
                </div>
            </div>
            <CardComponent/>
        </Grid>
    );
}

export default BottomCard;
