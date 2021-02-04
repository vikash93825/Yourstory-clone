import Carousel from "react-elastic-carousel";
import Item from "./Item";
import React, {useEffect} from 'react';
import {CardComponent} from './CardComponent'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const BottomCard=()=> {
    const dispatch = useDispatch()
    
    //loading the source data so that different data can be shown using filter
    useEffect(() => {
        dispatch(fetchSourceData())
    }, []);

    //getting source data from database
    const source = useSelector(state => state.source)

    //filtering the startup data which will be used to show in the landing page
    const startup = source.filter((item)=> item.category == "Startup")

    //filtering the unionBudget data which will be used to show in the landing page
    const unionBudget = source.filter((item)=> item.category == "unionBudget")

    //filtering the latestStory data which will be used to show in the landing page
    const latestStory = source.filter((item)=> item.category == "latestStory")

    //filtering the interview data which will be used to show in the landing page
    const interview = source.filter((item)=> item.category == "interview")
    return (
        <div>
            {/* showing the startup data by mapping in the carousal */}
            <Carousel breakPoints={breakPoints}>
            {
                startup.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>

            {/* showing the unionBudget data by mapping in the carousal */}
            <Carousel breakPoints={breakPoints}>
            {
                unionBudget.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>

            {/* showing the latestStory data by mapping in the carousal */}
            <Carousel breakPoints={breakPoints}>
            {
                latestStory.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>

            {/* showing the interview data by mapping in the carousal */}
            <Carousel breakPoints={breakPoints}>
            {
                interview.map((item)=> (
                    <Item>
                        <CardComponent {...item} />
                    </Item>
                ) )
            }
            </Carousel>
        </div>
    );
}

export default BottomCard;

