import React from 'react';
import { Outlet } from 'react-router';
import Header from '../shared components/Header';
import Footer from '../shared components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;