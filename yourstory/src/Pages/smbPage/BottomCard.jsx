import React, {useEffect} from 'react';
import {CardComponent} from './CardComponent'
import {useSelector, useDispatch} from 'react-redux'
import {fetchSourceData} from '../../Redux/DataRedux/actionCreator'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import HeadingContent from './HeadingContent';
import { useTranslation } from 'react-i18next';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const BottomCard=()=> {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch()
    
    //loading the source data so that different data can be shown using filter
    useEffect(() => {
        dispatch(fetchSourceData())
    }, []);

    //getting source data from database
    const source = useSelector(state => state.app.source)

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
            <HeadingContent head={`${t('bottomCard.Startup')}`} para={`${t('bottomCard.StartupSubHeading')}`} />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    startup.reverse().map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the unionBudget data by mapping in the carousal */}
            <HeadingContent head={`${t('bottomCard.UnionBudget')}`} para={`${t('bottomCard.UnionBudgetSubHeading')}`} />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    unionBudget.reverse().map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the latestStory data by mapping in the carousal */}
            <HeadingContent head={`${t('bottomCard.LatestStories')}`} para={`${t('bottomCard.LatestStoriesSubHeading')}`} />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    latestStory.reverse().map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the interview data by mapping in the carousal */}
            <HeadingContent head={`${t('bottomCard.Interview')}`} para={`${t('bottomCard.InterviewSubHeading')}`} />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    interview.reverse().map((item)=> (
                        <Item>
                            <CardComponent {...item} />
                        </Item>
                    ) )
                }
                </Carousel>
            </div>

            {/* showing the expertOpinion data by mapping in the carousal */}
            <HeadingContent head={`${t('bottomCard.ExpertOpinion')}`} para={`${t('bottomCard.ExpertOpinionSubHeading')}`} />
            <div>
                <Carousel breakPoints={breakPoints}>
                {
                    expertOpinion.reverse().reverse().map((item)=> (
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

