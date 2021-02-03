import React from "react"
import styles from "./ThumbAndBrand.module.css"
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const ThumbAndBrand = (props) => {
    const {handleImageChange} = props
    return (
        <>
            <div className = {styles.margin20}>
                <span style = {{fontWeight:"bold"}} >
                Website Thumbnail*:
                </span>
                <Tooltip title="Image for the story thumbnail" arrow>
                    <Button>
                        <img className = {styles.titleSvg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKBSURBVEiJvZbNaxNBGMZ/b1btJQetB9GCULBWhB6SnWWVtkg99mJB6NGLUi/evCme/PgjehAETwGNRe21ii0kJrkoUTDaBLVVQT20EKt18npoEtOPZKc99DkNM8+zv9nZmXkXdkkSZUilUl5vb+8pYFRE+kSkB0BVP4tIyVo7XalUsuPj43ZHoGKxuK9arU6IyDXgcMR8FkXkjqpOGmNWnUG5XK5fRKaA/gjARr211o6FYfguElQoFIZVdQo4sE1IQz+Bc8aY2bagbDZ73PO8jAOkCPwBEm3GfwChMeZDoyPWaOTz+b2e56WjIKo66fv+gDEmCdxqYzsIpGdmZvZsAonIBHAy4k0AHomI1tvpDr6BeDx+cR0olUp5qnrdAYKIXC4Wi/FSqdSlqlcivDdUNQb1b5TL5QZFZLZTaINWgRrQ5TCx077vZxpLN+rw8N/AnKo+BD66QABUdRTqSycixyL8T621PcaYoSAIzi8vL58Apl1AItLXBBF98gc9z/uWz+evAoyMjPxV1QcuoFqtdgSgsf1iHbwA+wFUtbtlpt3t7f8lItIKWHAJAXMtDxh2BC00Qar63iHzS0SewdqFq6pnXUCqWmqCYrHYY4fAc2NMFWBlZWUIiDuCnjRByWTyJWtbtpOyLeHQBQJUjDG5JkhEaiJyOyJUbTRE5BPwFah0CqjqzcZ11dxtS0tLd4E37UIiciGTyRwC8H3/vrX2jKq+7sB5VS6X7zXzrSMOZaIKlOrjRztANpWJdoUvzdpVvxN9V9WxIAjmWjs3HVTf919YawOgsF2CquY9zws2QrYEAYRhWJ6fnw/rNeqLA2NRVS8ZY8JEIlHZyrBrv1u7pn+FYASAwBd4zQAAAABJRU5ErkJggg==" alt="titlesvg"/>
                    </Button>
                </Tooltip>
                <br />
                {/* <input type = "file" size = "160" style = {{size:"200px",height:"200px",border:"1px solid red"}} onChange = {handleImageChange}  /> */}
                <div className = {styles.customfileupload}>
                    <div >
                        <img className = {styles.cutomFileImg} src="data:image/png;base64,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" alt="thumbnileImg" />
                    </div>
                    <div>
                        <label>
                            <input style = {{display:"none"}} onChange= {handleImageChange} type="file"/>
                            click select or upload image
                        </label>

                    </div>
                </div>
                <p className = {styles.colorRed} >* Website thumbnail is required</p>
            </div>
        </>
    )
}


export default ThumbAndBrand