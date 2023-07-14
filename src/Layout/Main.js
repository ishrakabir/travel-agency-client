import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='backdrop-brightness-35 h-screen backdrop-blur-xs'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className='backdrop-brightness-35 h-20   backdrop-blur-xs'>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Main;