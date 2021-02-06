import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
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


const SideCard = ({start_id,img_url, description, category,title}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.media} >
                    <img src="https://images.yourstory.com/cs/2/a09f22505c6411ea9c48a10bad99c62f/FM5-1612160733806-1612290254737.jpg?fm=png&auto=format&ar=1:1&mode=crop&crop=faces" style={{borderRadius:"5px"}} width="100px" height="80px" />    
                </div>
                
                <Typography variant="body2" color="textSecondary" component="p">{title}
                <Button size="small" color="secondry" style={{color:"#f23f2d",background:"#fff5f4"}}>
                    {category}
                </Button>
                </Typography>
            </Card>
        </div>
    );
}

export default SideCard;
