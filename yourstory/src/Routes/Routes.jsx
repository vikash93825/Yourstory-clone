import { Switch, Toolbar } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from '../Pages/SearchPage/Search';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'
import { Story } from '../Pages/StoryPage/Story';
import LandingPage from '../Pages/LandingPage/LandingPage';
import { Edit } from '../Component/Edit';
import SmbPage from '../Pages/smbPage/SmbPage';
import {YourStoryComp} from '../Pages/YourstoryTv/YourStoryComp';
import FeaturedPage from '../Pages/CreatePost/FeaturedPage';
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { Login } from '../Pages/Login/Login';
import { Register } from '../Pages/Register/Register';
import { Bookmark } from '../Pages/Bookmark/Bookmark';

const Routes = () => {
    return (
        <div>
        
            <Route path="/" render={()=><Topbar/>}/>
            <Route path="/" render={()=><Navbar/>}/>
            <Switch>
                <Route path="/" exact render={()=> <LandingPage/>} />
                <Route path="/search" exact render={()=><Search/>}/>
                <Route path="/story/:startId" component={Story}/> 
                <Route path="/editor" render ={()=><Edit/>}/>
                <Route path="/smbstory" render={()=> <SmbPage/>} />
                <Route path="/videos" render={()=> <YourStoryComp/>} />  
                <Route path="/poststory" render={()=><FeaturedPage/>}/>
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
