import React from "react"
import styles from "./BtnsStyles.module.css";
const FacebookBtn = () => {
    return (
        <>
            <button className = {styles.fbBtn} >
                <div className = {styles.displayFlex}>
                    <div className = {styles.fbicon}>
                        f
                    </div>
                    <div className = {styles.fbData}>
                        Connect to facebook
                    </div>
                </div>
            </button>
        </>
    )
}
export {FacebookBtn}