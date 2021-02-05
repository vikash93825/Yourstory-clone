import { Container } from "@material-ui/core"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBookMarkData } from "../../Redux/DataRedux/actionCreator"
import { StoryCard } from "../SearchPage/StoryCard"

const Bookmark = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBookMarkData())
    })
    const bookMarkData = useSelector(state=>state.app.bookmarkData)
    return(
        <Container maxWidth="sm">
            {
                bookMarkData && bookMarkData?.map(item=>{
                    return(
                        <div key={item.start_id}>
                            <StoryCard element={item}/>
                        </div>
                    )
                })
            }

        </Container>
    )
}

export {Bookmark}