import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from "./Featured.module.css"
const useStyles  = makeStyles((theme) => ({
    paperStyless:{
        margin: theme.spacing(5),
        width: theme.spacing(160),
        minHeight: theme.spacing(10),
    }
}))
const Featured = () => {
    const [image,setImage] = useState(null)
    const classes = useStyles();
    const handleImageChange  = (e) => {
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setImage(URL.createObjectURL(img))
        }
    }

    const handleSubmit = () => {
        return 
    }
    return (
        <>
            <form onSubmit = {handleSubmit}>
                <div>
                    <Paper className= {classes.paperStyless}>
                        <div className = {styles.displayFlex}>
                            <div className = {styles.margin20}>
                            Title: 
                            <br />
                            <textarea className = {styles.titleTextArea} rows={6} >Title of the story</textarea>
                            <p className = {styles.colorRed} >* Title of the story must be provided</p>
                            </div>
                            <div className = {styles.margin20}>
                                Website Thumbnile*:
                                <br />
                                <input type = "file" onChange = {handleImageChange}  />
                                <p className = {styles.colorRed} >* Website thumbnail is required</p>
                            </div>
                        </div>
                        <div className = {styles.displayFlex} >
                            <div className = {styles.margin20}>
                                Subtitle:
                                <br />
                                <textarea rows={3} className = {styles.subTitleTextArea} > sub-title of the story(Optional) </textarea> 
                            </div>
                            <div className = {styles.margin20}>
                                Brand*
                                <br /> 
                                <select name  = "select" className = {styles.selectMyStory} >
                                    <option value = "MyStory" >MyStory</option>
                                </select>
                            </div>
                        </div>
                    </Paper>
                    <Paper className= {classes.paperStyless}>
                        <div className = {styles.displayFlex} >
                            <div className = {styles.margin10}>
                                Tags <br />
                                <select name = "tagSelect" className = {styles.tagSelect}>
                                    <option value = "">no tags available</option>
                                </select>
                            </div>
                            <div className = {styles.addTagBtn}>
                                <Button color="secondary">ADD Tag</Button>
                            </div>
                        </div>
                    </Paper>
                    <Paper className= {classes.paperStyless} > 
                        <div className = {styles.margin10} >
                            Duplicate content
                            <br />
                            <textarea className = {styles.textAreaForDuplicatecontent} rows={1}>Add a canonical url</textarea>                   
                        </div>
                    </Paper>
                    <div className ={styles.paddingLeft}>
                        <button className = {styles.updateBtn} >Update Contents</button>
                        <button  className = {styles.reviewBtn} >Send to Review</button><button className = {styles.upArrowBtn}>^</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Featured