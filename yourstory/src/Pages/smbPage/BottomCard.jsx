// import React, {useEffect} from 'react';
// import { makeStyles } from "@material-ui/core/styles";
// import styles from './LandingPage.module.css'
// import {CardComponent} from './CardComponent'
// import {useSelector, useDispatch} from 'react-redux'
// import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
// import {
//     Card,
//     CardActionArea,
//     CardActions,
//     CardContent,
//     CardMedia,
//     Button,
//     Typography,
//     Grid,
// } from "@material-ui/core";

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 650,
        
//     },
//     right:{
//         paddingRight: 100
//     },
//     media: {
//         height: 340,
//         borderRadius: 10
//     },
//     main: {
//         paddingLeft: 120,
//         paddingTop:70
//     },
// });

// const BottomCard = () => {
//     const dispatch = useDispatch()
    
//     useEffect(() => {
//         dispatch(fetchSourceData())
//         //dispatch(categoryParams())
//     }, []);
//     const source = useSelector(state => state.source)
//     console.log(source)
//     const startup = source.filter((item)=> item.category == "Startup")
//     console.log(startup)
//     //console.log(img_url)
//     const classes = useStyles();
//     return (
        
//         <Grid>
//             <div className={styles.stcard} >
//                 <img src="https://images.yourstory.com/assets/icons/ic_startup.svg" width="50px" />
//                 <div>
//                     <div className={styles.head} >Startup</div>
//                     <div>Deep-dive stories of changemakers and innovators from the startup ecosystem</div>
//                 </div>
//             </div>
//             <Grid item container>
                
//                 {
//                     startup.map((item)=> <CardComponent {...item} /> )
//                 }
                
//             </Grid>
//         </Grid>
//     );
// }



import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from './LandingPage.module.css'
import {CardComponent} from './CardComponent'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
//import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const BottomCard=()=> {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchSourceData())
        //dispatch(categoryParams())
    }, []);
    const source = useSelector(state => state.source)
    console.log(source)
    const startup = source.filter((item)=> item.category == "Startup")
    console.log(startup)

    const unionBudget = source.filter((item)=> item.category == "unionBudget")
    console.log(unionBudget)

    const latestStory = source.filter((item)=> item.category == "latestStory")
    console.log(latestStory)

    const interview = source.filter((item)=> item.category == "interview")
    console.log(interview)
    return (
        <div>
            <Carousel breakPoints={breakPoints}>
            {
                startup.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>
            <Carousel breakPoints={breakPoints}>
            {
                unionBudget.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>
            <Carousel breakPoints={breakPoints}>
            {
                latestStory.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>
            <Carousel breakPoints={breakPoints}>
            {
                interview.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>
        </div>
    );
}

export default BottomCard;

