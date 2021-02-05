import React,{useState} from "react"
import styles from "./Tags.module.css"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Tags = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {tag, handleTag, handleTagDescription} = props

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    return (
        
        <div className = {styles.displayFlex} >
            <div className = {styles.margin10}>
                Tags <Tooltip title="you can have 1 tag in a story" arrow>
                        <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                        </Button>
                        </Tooltip>
                <br />
                <select name = "tagSelect" className = {styles.tagSelect}>
                    <option value = "">{tag.length <= 0 ? "no tags available" : tag} </option>
                </select>
            </div>
            <div className = {styles.addTagBtn}>
                <div>
                    <button type="button" className = {styles.tagbtn} onClick={handleOpen}>
                        ADD Tag
                    </button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <div className={classes.paper}>
                            <input  type="text" placeholder = "enter tag" value = {tag} onChange = {handleTag} />
                            <HighlightOffRoundedIcon onClick = {handleClose} />
                        </div>
                        </Fade>
                    </Modal>
                <Tooltip title="you can add tags that tags do not exit" arrow>
                        <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                        </Button>
                        </Tooltip>
                </div>
            </div>
        </div>
        
    )
}

export default Tags