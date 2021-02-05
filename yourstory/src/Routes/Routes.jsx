import { Switch, Toolbar } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from '../Pages/SearchPage/Search';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'
import { Story } from '../Pages/StoryPage/Story';
import LandingPage from '../Pages/LandingPage/LandingPage';
import FeaturedPage from '../Pages/CreatePost/FeaturedPage';
import SmbPage from '../Pages/smbPage/SmbPage';
import {YourStoryComp} from '../Pages/YourstoryTv/YourStoryComp';
import { Edit } from '../Component/Edit';
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { Login } from '../Pages/Login/Login';
import { Register } from '../Pages/Register/Register';
import { Bookmark } from '../Pages/Bookmark/Bookmark';
import { MyStoriesDataPage } from '../Pages/MyStoryDatapage/MyStoriesDataPage';


const Routes = () => {
    return (
        <div>
            <Route path="/" render={()=><Topbar/>}/>
            <Route path="/" render={()=><Navbar/>}/>
            <Switch>
                <Route path="/" exact render={()=> <LandingPage/>} />
                <Route path="/search" exact render={()=><Search/>}/>
                <Route path="/story" render={()=><Story/>}/> 
                <Route path="/poststory" render={()=><FeaturedPage/>}/>
                <Route path="/story" render={()=><Story/>}/> 
                <Route path="/mystorydatapage" render={() => <MyStoriesDataPage/>}/>
                <Route path="/editor" render ={()=><Edit/>}/>
                <Route path="/smbstory" render={()=> <SmbPage/>} />
                <Route path="/videos" render={()=> <YourStoryComp/>} /> 
                <Route path="/profile" render={()=><ProfilePage/>}/>
                <Route path = "/login" render={()=><Login/>}/>
                <Route path = "/signup" render={()=><Register/>}/>
                <Route path = "/bookmark" render={()=><Bookmark/>}/>
            </Switch>
            <Route path="/" render={()=><Footer/>}/>
        </div>
    );
}

export default Routes;
