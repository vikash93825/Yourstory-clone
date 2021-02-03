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
            </Switch>
            <Route path="/" render={()=><Footer/>}/>
        </div>
    );
}

export default Routes;
