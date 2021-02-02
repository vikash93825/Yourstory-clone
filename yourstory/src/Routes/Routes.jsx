import { Switch, Toolbar } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Search } from '../Pages/SearchPage/Search';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'

const Routes = () => {
    return (
        <div>
            <Topbar/>
            
            <Route path="/"   render={()=><Navbar/>}/>
            <Switch>
                <Route path="/search"  render={()=><Search/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Routes;
