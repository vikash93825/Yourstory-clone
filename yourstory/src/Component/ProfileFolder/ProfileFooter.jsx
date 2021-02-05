import React from "react"
import Grid from "@material-ui/core/Grid"
import styles from "./ProfileFooter.module.css"
import FavoriteIcon from '@material-ui/icons/Favorite'

const ProfileFooter = ()=> {
    return (
        <>
            <Grid container className = {styles.footerStyle}>
              
                <Grid className = {styles.paddingTop70} xs = {12} sm = {2}>About YourStory</Grid>
                <Grid className = {styles.paddingTop70} xs = {12} sm = {2}>Help and feedback</Grid>
                <Grid className = {styles.paddingTop70} xs = {12} sm = {2}>Privacy Policy</Grid>
                <Grid xs = {12} sm = {2}></Grid>
            
                <Grid xs = {12} sm = {4}>
                    <div className = {styles.companyAddress}>
                        <p>Copyright 2020 YourStory Media Pvt Ltd</p>
                        <p>Built with <FavoriteIcon className = {styles.favIconStyle} color = "secondary" /> in india</p>
                        <p>v2.0.502</p>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default ProfileFooter