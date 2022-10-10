import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Nav from './NavBar';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;