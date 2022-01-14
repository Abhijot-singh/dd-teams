import React from 'react';
import Header from './Header';
import Model from "./Model";
import Footer from './Footer';
import Section from './AboutusPage/Section';
import Stickybar from './Stickybar';
function AboutusPage() {
    return (
        <div className='aboutus-page'>
        <div className='container-fluid'>
        <div id='#top'></div>
           <Header/>
           <Section/>
           <Stickybar/>
           <Footer/>              
        </div>
        <Model/>
        </div>
    );
}

export default AboutusPage;