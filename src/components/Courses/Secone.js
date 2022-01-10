import React from 'react';
import secone from "../../images/secone.png"
function Secone() {
    return (
        <div>
           <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="design_div">
            <div class="design_div_two">
              <h1 class="text-start fw-bold px-5 my-5 py-3">Courses Offered</h1>
            </div>
          </div>
          <div>
            <img
              src={secone}
              alt="image"
              class="w-100 img-fluid section_two_img"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p class="fs-4 text-left pt-4 my-5">
            Introducing an all new way of learning coding where intensive and
            immersive training at our bootcamps produce highly skilled and
            talented individuals. With the educational reforms and introduction
            of technology, the time isn’t far when programming will be necessary
            for everyone irrespective of your education or profession. To know
            more, go through our wide range of courses
          </p>
        </div>
      </div>
        </div>
    );
}

export default Secone;