import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aboutus from './Doionseducation/Aboutus';
import Herosection from './Doionseducation/Herosection';
import Couresoffered from './Doionseducation/Couresoffered';
import Contanctus from './Doionseducation/Contanctus';
import Stickybar from './Stickybar';
function Homepage() {
    return (
        <div className='home-page'>
        <div className='container-fluid'>
        <Header/>
        <Herosection/>
        <Aboutus/>
        <Couresoffered/>
        <Contanctus/>
        <Stickybar/>
        <Footer/>
        </div>
        </div>
    );
}

export default Homepage;