import React, {useEffect} from 'react';
import {CardComponent} from './CardComponent'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import HeadingContent from './HeadingContent';

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

    //filtering the expertOpinion data which will be used to show in the landing page
    const expertOpinion = source.filter((item)=> item.category == "expertOpinion")
    return (
        <div>
            {/* showing the startup data by mapping in the carousal */}
            <HeadingContent head="Startup" para="Deep-dive stories of changemakers and innovators from the startup ecosystem" />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    startup.map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the unionBudget data by mapping in the carousal */}
            <HeadingContent head="Union Budget 2021" para="News, updates and analysis on India's Union Budget 2021" />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    unionBudget.map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the latestStory data by mapping in the carousal */}
            <HeadingContent head="Latest Stories" para="Latest published stories, interviews, and updates across YourStory properties" />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    latestStory.map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the interview data by mapping in the carousal */}
            <HeadingContent head="Interview" para="Conversations with entrepreneurs, leaders, influencers, and changemakers" />
            <div>
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

            {/* showing the expertOpinion data by mapping in the carousal */}
            <HeadingContent head="Expert Opinion" para="Analysis and opinion pieces by guest authors, contributors, experts" />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    expertOpinion.map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>
        </div>
    );
}

export default BottomCard;

