import { Toolbar } from '@material-ui/core';
import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'
import {Search} from '../Pages/SearchPage/Search'
import LandingPage from '../Pages/LandingPage/LandingPage';

const Routes = () => {
    return (
        <div>
            <Route path="/" render={()=><Topbar/>}/>
            <Route path="/" render={()=><Navbar/>}/>
            <Switch>
                <Route path="/" exact render={()=> <LandingPage/>} />
                <Route path="/search" exact render={()=><Search/>}/>
            </Switch>
            <Route path="/" render={()=><Footer/>}/>
        </div>
    );
}

export default Routes;
