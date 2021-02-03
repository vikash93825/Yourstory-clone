import React,{useState} from "react"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import styles from "./Title.module.css"
const SubTitle = () => {
    const [subtitle, setSubTitle] = useState("")

    const handleChnage = (e) => {
        if(subtitle.split("").length <= 300){
            setSubTitle(e.target.value)
        }
    }
    const handleKeyUp = (e) => {
        if(subtitle.split("").length > 300 &&  e.keyCode === 8){
            setSubTitle(e.target.value)
        }
    }

    return (
        <Grid container >
            {/* <Grid item xs = {12} sm = {6} md = {5} className = { styles.margin50Top0} > */}
            <Grid item style= {{width:"50%"}} className = { styles.margin50Top0} >
                SubTitle <Tooltip title="This is the subtitle of the story" arrow>
                        <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                        </Button>
                        </Tooltip>
                <textarea value = {subtitle} className = {styles.subTitleTextArea} onKeyUp = {handleKeyUp} rows={6} onChange = {handleChnage} placeholder = "Sub Title of the story" />
                <div className = {styles.displayFlexSpaceBitween}>
                    <div></div>
                    <div className = {styles.colorCyan}>{subtitle.split("").length}/300</div>
                </div>
            </Grid>
        </Grid>
    )
}



export default SubTitle