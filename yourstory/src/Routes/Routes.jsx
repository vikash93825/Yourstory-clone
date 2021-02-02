import { Toolbar } from '@material-ui/core';
import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import Topbar from './Navbar/Topbar'

const Routes = () => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default Routes;
