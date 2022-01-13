import React from 'react';
import { Link } from 'react-router-dom';
function Couresoffered() {
  function codingCareer(){
       
  }
    return (
        <div>
            <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="design_div">
            <div class="design_div_two">
              <h1 class="px-4 py-3 my-5">Courses Offered</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row d-flex justify-content-center">
            <div class="col-md-4 my-2">
              <div class="course_offer_ani py-2" onClick={codingCareer}>
                <h1>Coding as a career</h1>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="course_offer_ani py-2">
                <h1>Coding as a hobby</h1>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="course_offer_ani py-2">
                <h1>Pre-bootcamp training</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Couresoffered;