import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Secone from './Courses/Secone';
import Sectwo from './Courses/Sectwo';
function Courses() {
    return (
        <div className='container-fluid'>
            <Header/>
            <Secone/>
            <div class="row justify-content-center">
                <div className='col-md-8 my-5'>
                    <Sectwo/>           
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Courses;