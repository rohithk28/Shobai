import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Openact from '../Openact';
import Footer from '../Footer';
import Navbar from '../Navbar';
function Homepage() {
    return ( 
        <>
            
            <Hero/>
            <Awards />
            <Stats/>
            <Pricing/>
            <Education/>
            <Openact/>
            <Footer/>
        </>
     );
}

export default Homepage;