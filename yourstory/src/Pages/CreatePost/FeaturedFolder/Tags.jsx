import React from "react"
import styles from "./Tags.module.css"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const Tags = () => {
    return (
        
        <div className = {styles.displayFlex} >
            <div className = {styles.margin10}>
                Tags <Tooltip title="you can have maximum of 5 tags in a story" arrow>
                        <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                        </Button>
                        </Tooltip>
                <br />
                <select name = "tagSelect" className = {styles.tagSelect}>
                    <option value = "">no tags available</option>
                </select>
            </div>
            <div className = {styles.addTagBtn}>
                <Button color="secondary">ADD Tag</Button>
                <Tooltip title="you can add tags that tags do not exit" arrow>
                        <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                        </Button>
                        </Tooltip>
            </div>
        </div>
        
    )
}

export default Tags