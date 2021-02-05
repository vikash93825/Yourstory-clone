import React  from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from "./BtnsStyles.module.css";
const TwitterBtn = () => {
    return (
        <>
            <button className = {styles.twitBtn} >
                <div className = {styles.displayFlex}>
                    <div className = {styles.twitterIcon}>
                        <TwitterIcon />
                    </div>
                    <div className = {styles.fbData}>
                        Connect to twitter
                    </div>
                </div>
            </button>
        </>
    )
}
export {TwitterBtn}