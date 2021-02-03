import { Switch, Toolbar } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from '../Pages/SearchPage/Search';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'
import { Story } from '../Pages/StoryPage/Story';

const Routes = () => {
    return (
        <div>
            <Topbar/>
            
            <Route path="/"   render={()=><Navbar/>}/>
            <Switch>
                <Route path="/search"  render={()=><Search/>}/>
                <Route path="/story" render={()=><Story/>}/> 
            </Switch>
            <Footer/>
        </div>
    );
}

export default Routes;
