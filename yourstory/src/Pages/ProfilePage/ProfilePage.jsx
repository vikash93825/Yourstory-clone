import React from "react"
import styles from "./ProfilePage.module.css"
import Grid from "@material-ui/core/Grid"
import CreateIcon from '@material-ui/icons/Create';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button"
import FacebookBtn from "./ProfileFolder/FacebookBtn";
import LinkedInBtn from "./ProfileFolder/LinkedInBtn"
import TwitterBtn from "./ProfileFolder/TwitterBtn"
import ProfileFooter from "./ProfileFolder/ProfileFooter"
const ProfilePage = () => {
    const cardData = [
        {
            "cardHeader":"Write your story",
            "cardData":"Submit an article to be published on MyStory",
            "cardLink":"GO TO"
        },
        {
            "cardHeader":"Edit Your Bio",
            "cardData":"Edit the author bio that is shown next to your stories and on your author page",
            "cardLink":"EDIT"
        },
        {
            "cardHeader":"Bookmarks",
            "cardData":"Find all articles that you have bookmarked",
            "cardLink":"GO TO"
        }
    ]

    const handleEditProfile = () => {
        console.log();
    }

    const handleGoToWriteStoryPage = () => {
        console.log();
    }

    const handleGotoEditPage = () => {
        console.log();
    }
    const handleGoToBookMarksPage = () => {
        console.log();
    }
    const handlePassword = () => {
        console.log()
    }
    const handleLogOut = () => {
        console.log();
    }

    return (
        <>
            <Grid xs = {12}>
                <div className = {styles.myAccountHeader} >My Account</div>
            </Grid>
            <div>
                <div className = {styles.upperBackground}>
                    <Grid className ={styles.userDataDiv}>
                        <Grid xs = {1}>
                            <img className = {styles.userImg} src="https://images.yourstory.com/cs/users/d02a52a0-4b7a-11eb-b2f0-b1bf6c34fbf6/profile_image_1609427641586.jpg" alt = "user image" />
                        </Grid>
                        <Grid className = {styles.table} xs = {3}>
                            <table>
                                <tbody>
                                    <tr><td className = {styles.name}>Chandra Mouli</td></tr>
                                    <tr><td className = {styles.email}>mouliofficial98@gmail.com</td></tr>
                                    <tr><td className = {styles.editProfile} onClick = {handleEditProfile}>edit profile</td></tr>
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.welcomeTag} xs = {12}>
                        Welcome Chandra Mouli
                    </Grid>
                    <Grid className = {styles.editCardsHeader} xs = {12}>
                        Control, customize, and secure your account, all in one place
                    </Grid>
                    <div className = {styles.redLineParent} > 
                        <div className = {styles.redLine}></div>
                    </div>
                    <Grid className = {styles.controleCards} container>

                        <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                            <Paper elevation = {3} className = {styles.paper}>
                                
                                <div className = {styles.displayFlex} >
                                    <div>
                                        <CreateIcon color = "secondary" className = {styles.cardIcon} />
                                    </div>
                                    <div className = {styles.CardHeader} >
                                        {cardData[0].cardHeader}
                                    </div>
                                </div>
                                <div className = {styles.cardData}>{cardData[0].cardData}</div>
                                <div onClick = {handleGoToWriteStoryPage} className = {styles.cardLink}>{cardData[0].cardLink}</div>
                            </Paper>
                        </Grid>
                    <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                        <Paper elevation = {3} className = {styles.paper}>

                            <div className = {styles.displayFlex} >
                                <div>
                                    <PermContactCalendarIcon color = "secondary" className = {styles.cardIcon} />
                                </div>
                                <div className = {styles.CardHeader} >
                                    {cardData[1].cardHeader}
                                </div>
                            </div>
                            <div className = {styles.cardData}>{cardData[1].cardData}</div>
                            <Grid>
                            <div onClick = {handleGotoEditPage} className = {styles.middleCardLink}>{cardData[1].cardLink}</div>
                            </Grid>
                        </Paper>
                    </Grid>
                        <Grid sm = {10} lg = {3} className = {styles.marginLeft85}>
                            <Paper elevation = {3} className = {styles.paper}>

                                <div className = {styles.displayFlex} >
                                    <div>
                                        <BookmarkIcon color = "secondary" className = {styles.cardIcon} />
                                    </div>
                                    <div className = {styles.CardHeader} >
                                        {cardData[2].cardHeader}
                                    </div>
                                </div>

                                <div className = {styles.cardData}>{cardData[2].cardData}</div>
                                <Grid>
                                <div onClick = {handleGoToBookMarksPage} className = {styles.cardLink}>{cardData[2].cardLink}</div>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className = {styles.profilePageSecondHalf}>

                    <Grid className = {styles.connectSocialHeader} xs = {11}>
                        Connect with Social Accounts
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                        <Grid xs = {10} md = {5} >
                            <p className = {styles.googleHeader}>You are connected to google</p>
                            <p className = {styles.googleSocialData}>You can now sign in to YourStory using your google account. 
                                We will never post to google or message your friends 
                                without your permission.
                            </p>
                        </Grid>
                        <Grid xs = {10} md = {3} ></Grid>
                        <Grid xs = {10} md = {4}>
                            <div className = {styles.displayFlexaddingLeft50}>
                                <div className = {styles.usersocialLeftSection} >
                                    <p className = {styles.userNameHeader}>Chandra Mouli</p>
                                    <p className = {styles.editProfile}>(disconect)</p>
                                </div>
                                <div>
                                <img className = {styles.userImgSocial} src="https://images.yourstory.com/cs/users/d02a52a0-4b7a-11eb-b2f0-b1bf6c34fbf6/profile_image_1609427641586.jpg" alt = "user image" />
                                </div>
                            </div>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid item xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to facebook</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid item xs= {10} md = {3}>
                                <FacebookBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to linkedin</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid xs= {10} md = {3}>
                                <LinkedInBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid container >
                            <Grid xs = {10} md = {6} >
                                <p className = {styles.googleHeader}>Connect to twitter</p>
                                <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                    without your permission.
                                </p>
                            </Grid>
                            <Grid xs = {10} md = {3} ></Grid>
                            <Grid xs= {10} md = {3}>
                                <TwitterBtn />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid xs = {10} md = {6} >
                            <p className = {styles.googleHeader}>Social Profile Visibility</p>
                            <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                without your permission.
                            </p>
                        </Grid>
                        
                    </Grid>
                    <Grid className = {styles.googleconnectionDetails} xs = {11}>
                        <Grid xs = {10} md = {6} >
                            <p className = {styles.googleHeader}>Add or Update Password</p>
                            <p className = {styles.googleSocialData}>We will never post to facebook or message your friends 
                                without your permission.
                            </p>
                        <Grid xs = {12} >
                            <button onClick = {handlePassword} className = {styles.addPswdBtn} >Add Password</button>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid className = {styles.logOutSection}>
                        <button onClick = {handleLogOut} className = {styles.addPswdBtn} >Log out</button>
                    </Grid>
                </div>

            </div>

            <div>
                <ProfileFooter />
            </div>
        </>
    )
}

export default ProfilePage