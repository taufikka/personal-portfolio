import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../Main/About/About';
import Banner from '../Main/Banner/Banner';
import Contact from '../Main/Contact/Contact';
import Footer from '../Main/Footer/Footer';
import Projects from '../Main/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About />
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;