import React from 'react';
import Footer from '../../../Global/Footer/Footer';
import Courses from '../../Courses/Courses';
import Banner from '../Banner/Banner';
import Contact from'../../Contact/Contact';

const Home = () => {
    return (
        <>
            <Banner />
            <Courses />
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;