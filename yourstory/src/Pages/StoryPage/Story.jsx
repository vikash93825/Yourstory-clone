import React from "react"
import styles from "./Story.module.css"
import { Container, Hidden,Button,Card ,Divider} from "@material-ui/core"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useParams ,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postBookMarkData } from "../../Redux/DataRedux/actionCreator";
const Story = () =>{
    const history  =useHistory()
    const params = new URLSearchParams(window.location.search)
    const id = params.get("q")
    console.log(params.get("q"))
    console.log(params)
    const data = useSelector(state=>state.app.source)

    //console.log(history.location.pathname)
    const storyData = data.find((item)=>item.start_id===id)
    console.log(storyData)
    const dispatch = useDispatch()
    const handleBookMark = () =>{
        console.log("bookmark")
        dispatch(postBookMarkData(storyData))
    }
    console.log(storyData)
    return(
        <div className={styles.main}>
        <div>
            <Button className={styles.tags} color="secondary" style={{background:"#323232"}} variant="contained">{storyData.tag}</Button>
            <p className={styles.life}>{storyData.title}</p>
            <div className={styles.facebook}>
                <div className={styles.date} >
                    <p>By {storyData.authors} | {storyData.date}</p>
                </div>
            </div>
        </div>
            <div className="row">
                <div className="">
                    <div>
                        <img src={storyData.img_url} width="100%" alt=""/>
                    </div>
                    <div>
                    <div className={styles.qoutes}>
                        Speaking at the Resurgence TiEcon Delhi-NCR event, Isha Foundation Founder Jaggi Vasudev, popularly known as Sadhguru, said the education system is generalising all children with the same kind of education, and this needs to change.
                    </div>
                    <div className={styles.marks}>
                        <div style={{color:"#a8a8a8"}}>
                            <span style={{marginRight:"10px"}}>CLAP</span>
                            <img width="25px" src="https://static.thenounproject.com/png/1471176-200.png" alt=""/>
                        </div>
                        <div>
                            <BookmarkBorderIcon style={{marginRight:"10px"}} onClick={handleBookMark}/>
                            <img width="25px" src="https://static.thenounproject.com/png/1471176-200.png" alt=""/>
                        </div>
                    </div>
                    </div>
                    <Divider/>
                    <div className={styles.story}>
                        <p>Story</p>
                        <hr/>
                        <p className={styles.desc}>{storyData.descrition}</p>
                    </div>
                </div>
            </div>
       
    </div>
    )
}
export {Story}