import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './AboutusPage/Section';
function AboutusPage() {
    return (
        <div className='aboutus-page'>
        <div className='container-fluid'>
           <Header/>
           <Section/>
           <Footer/>              
        </div>
        </div>
    );
}

export default AboutusPage;