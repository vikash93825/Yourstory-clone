import React from "react"
import styles from "./Story.module.css"
import { Container, Hidden,Button,Card } from "@material-ui/core"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const Story = () =>{


    return(
        <div className={styles.main}>
        <div>
            <Button className={styles.tags} color="secondary" style={{background:"#323232"}} variant="contained">Education</Button>
            <p className={styles.life}>To improve our education, we need to stop mass production, says Sadhguru</p>
            <div className={styles.facebook}>
                <div className={styles.date} >
                    <p>By Anju Ann Mathew|29th Jan 2021</p>
                </div>
              
            </div>
        </div>
            <div className="row">
                <div className="">
                    <div>
                        <img src="https://images.yourstory.com/cs/2/6f8dcd002d6d11e9aa979329348d4c3e/Sadhgurupic11558799467939-1586767777891.png?fm=png&auto=format&ar=2:1&mode=crop&crop=face" width="100%" alt=""/>
                    </div>
                    <div>
                    <div className={styles.qoutes}>
                        Speaking at the Resurgence TiEcon Delhi-NCR event, Isha Foundation Founder Jaggi Vasudev, popularly known as Sadhguru, said the education system is generalising all children with the same kind of education, and this needs to change.
                    </div>

                    <div className={styles.marks}>
                        <div>clap</div>
                        <div>
                            <BookmarkBorderIcon/>
                        </div>
                    </div>
                  
                    </div>
                    <div className={styles.story}>
                        <p>Story</p>
                        <hr/>
                        <p>In India, the concept of education has been very sacred. But over the years, people lost their way and made it about obtaining credits and mechanising the minds. Starting with that thought, Sandeep Sinha, Co-founder and Managing Partner of Lumis Partners, put forward the question, “Where do you think education lost the script?</p>
                        <div className={styles.details} >

                        </div>
                        <div className={styles.bank} >
                             
                        </div>
                        <div className={styles.donate} ></div>
                        <hr/>
                        <Card/>
                    </div>
                </div>
                <div className="">
                    <div className={styles.raised} >
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className={styles.goal}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.donate} ></div>
                    <hr/>
                    <Card/>
                    <div>
                      
                        
                    </div>
                </div>
            </div>
        
    </div>
    )

}

export {Story}