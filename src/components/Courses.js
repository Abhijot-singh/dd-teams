import React from 'react';
import Header from './Header';
import Model from "./Model";
import Footer from './Footer';
import Secone from './Courses/Secone';
import Sectwo from './Courses/Sectwo';
function Courses() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Secone/>
            <div class="row justify-content-center">
                <div >
                    <Sectwo/>           
                </div>
                <Model/>
            </div>
            <Footer/>
        </div>
    );
}

export default Courses;