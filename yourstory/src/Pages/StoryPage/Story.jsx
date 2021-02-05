import React from "react"
import styles from "./Story.module.css"
import { Container, Hidden,Button,Card ,Divider} from "@material-ui/core"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Story = () =>{
    const params = useParams()
    const {startId} = params
    console.log(params)
    const data = useSelector(state=>state.app.source)
    console.log(startId,data)

    const storyData = data.find((item)=>item.start_id===startId)
    console.log(storyData)

    const handleBookMark = () =>{
        console.log("bookmark")
    }

    return(
        <div className={styles.main}>
        {/* <div>
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
                        <p className={styles.desc}>{storyData.description}</p>
                    </div>
                </div>
            </div>
        */}
    </div>
    )
}
export {Story}