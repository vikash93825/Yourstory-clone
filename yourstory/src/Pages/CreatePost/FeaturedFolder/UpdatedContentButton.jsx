import React from "react"
import Button from "@material-ui/core/Button"
import styles from "./UpdatedContentButton.module.css"
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const UpdatedContentButton = (props) => {
    const {handleReview, handleUpdate} = props
    return (
        <>
            <div className ={styles.paddingLeft}>
                <button type="submit" onClick = {handleUpdate}  className = {styles.updateBtn} >Update Contents</button>
                <button type="submit" onClick = {handleReview} className = {styles.reviewBtn} >Send to Review</button><button className = {styles.upArrowBtn}><ArrowDropUpIcon fontSize = "inherit" /></button>
            </div>
        </>
    )
}

export default UpdatedContentButton