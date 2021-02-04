import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        height: 100,
        display: "flex",
        '& > *':{
            padding: 10
        }
    },
    media: {
        borderRadius: 10
    },
    main: {
        paddingLeft: 0,
    }
});


const SideCard = ({img_url, description, category}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.media} >
                    <img src={img_url} style={{borderRadius:"5px"}} width="90px" height="80px" />    
                </div>
                
                <Typography variant="body2" color="textSecondary" component="p">{description}
                <Button size="small" color="secondry" style={{color:"#f23f2d",background:"#fff5f4"}}>
                    {category}
                </Button>
                </Typography>
                
            </Card>
        </div>
    );
}

export default SideCard;
