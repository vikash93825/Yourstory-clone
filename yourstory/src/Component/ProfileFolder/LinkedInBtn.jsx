import React from "react"
import styles from "./BtnsStyles.module.css";
const LinkedInBtn = () => {
    return (
        <>
            <button className = {styles.linkedInBtn} >
                <div className = {styles.displayFlex}>
                    <div className = {styles.fbicon}>
                        in
                    </div>
                    <div className = {styles.fbData}>
                        Connect to linkedin
                    </div>
                </div>
            </button>
        </>
    )
}
export default LinkedInBtn