import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import YourstoryTv from './YourstoryTv';
import styles from './YourstoryComp.module.css'
import Item1 from './Item1'
import {Hidden} from '@material-ui/core'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
];


const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const YourStoryComp=()=> {
    return (
        <div>
        <Carousel breakPoints={breakPoints}>
            <Item >
                <img src="https://images.yourstory.com/cs/2/2d86ed30b28211e8b2e7114aea10c711/Videothumbnail-01-1605779706950.png?fm=png&ar=2:1&mode=crop&crop=faces?" width="100%" />
            </Item>
            <Item>
                <img src="https://images.yourstory.com/cs/2/f22200605a2011eba96fcb2c49aee6c9/DDFeb3DD-375x500-1612350549456.jpg?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
                
            </Item>
            <Item>
                <img src="https://images.yourstory.com/cs/2/f22200605a2011eba96fcb2c49aee6c9/DDFeb4DD-375x5001-1612430911509.jpg?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%"/>
            </Item>
            
        </Carousel>
        <div className={styles.main}>
            <YourstoryTv id="eUSgw2VkbJQ"/>
        </div>
        <div className={styles.main}>
            <h3>Daily Dispatch by YourStory</h3>
            <p>A show that tells you about all things making news in the start-up, tech and digital ecosystem. Tune in every day at 5 PM to get your Daily Dispatch!</p>
        </div>
        <div className={styles.main}>
            <YourstoryTv id="12AOcV9lsdU"/>
        </div>
        <div className={styles.money}>
            <Hidden smDown><div style={{width:"5%",height:"5%"}} >
                <img src="https://images.yourstory.com/cs/series/Money-Matters-Thumbnail-1587616298023.png" style={{width:"100%", borderRadius:"50%"}} />
            </div>
            </Hidden> 
            <h2>Money Matters By Shraddha Sharma</h2>
        </div>
        <div className={styles.money}><p> A series to help you navigate the current financial issues, answer questions around saving money, and help you invest right. In this series we will have a dialogue with most prominent people from startups to MNCs, expressing their opinion on money.</p></div>

        <div className={styles.main}>
            <h2>YS SIGNATURE</h2>
            <p>Exclusive conversations with eminent personalities View All </p>
        </div>
        <div>
        <Carousel breakPoints={breakPoints1}>
            <Item1>
                <img src="https://images.yourstory.com/cs/2/07ae79b0d69b11e895f3c97c5f4684c5/RaamdeoAgrawal-03-1611557618596.png?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
            </Item1>
            <Item1>
                <img src="https://images.yourstory.com/cs/2/e2783ce06a4111e9b6441389cc72a951/Atlassianstory-02-1598340285667.png?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
            </Item1>
            <Item1>
                <img src="https://images.yourstory.com/cs/2/07ae79b0d69b11e895f3c97c5f4684c5/SaaSyAWSAWS3copy-1610170818482.png?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
            </Item1>
            <Item1>
                <img src="https://images.yourstory.com/cs/2/07ae79b0d69b11e895f3c97c5f4684c5/PaulDupuis375x500-1609761139200.png?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
            </Item1>
            <Item1>
                <img src="https://images.yourstory.com/cs/2/07ae79b0d69b11e895f3c97c5f4684c5/PaulDupuis375x500-1609761139200.png?fm=png&ar=3:4&mode=crop&crop=faces?" width="100%" />
            </Item1>
        </Carousel>
        </div>
        <div className={styles.main}>
            <YourstoryTv id="_jPPwjlO4ww"/>
        </div>
        </div>
    );
}

