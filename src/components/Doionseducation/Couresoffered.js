import React from "react";
//import Codingcareer from "./threeCourses/Codingcareer";
import { useHistory } from "react-router-dom";
function Couresoffered() {
  let history = useHistory();
  function codingCareer() {
    window.scroll(1250,1250)
    history.push('/courses/')
  }
   function codingHobby(){
    window.scroll(900,900)
    history.push('/courses/')
   }
   function BootCamp(){
    window.scroll(1700,1700)
    history.push('/courses/')
   }
  return (
    <div >
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
            <div class="col-md-4 my-2" onClick={codingCareer}>
              <div class="course_offer_ani py-2" >
                <h1>Coding as a career</h1>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="course_offer_ani py-2" onClick={codingHobby}>
                <h1>Coding as a hobby</h1>
              </div>
            </div>
            <div class="col-md-4 my-2">
              <div class="course_offer_ani py-2" onClick={BootCamp}>
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
