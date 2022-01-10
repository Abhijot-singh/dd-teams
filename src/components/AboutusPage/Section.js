import React from 'react';
import image from "../../images/Doionsimg3.png"
function Sectionone() {
    return (
        <div className='section-one'>
            <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="design_div">
            <div class="design_div_two">
              <h1 class="text-start fw-bold px-5 my-5 py-3">About Us</h1>
            </div>
          </div>
          <div>
            <img
              src={image}
              class="w-100 img-fluid section_two_img"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <p class="fs-4 text-left pt-4">
            Enhance your technical and entrepreneurial skills with intense
            coding bootcamps by Doions education. An initiative to educate
            people with the latest skills in the field of information and
            technology. Under this, we’ll be conducting coding classes for
            anyone who wishes to learn to code. The classes will be in the form
            of <b>coding boot camps.</b>
          </p>
          <p class="fs-4 text-left pt-4">
            Bootcamps are <b> short-term training sessions </b>for technology
            enthusiasts to make them learn coding and technology in an
            interactive way. Bootcamps allow the students to
            <b>learn and create on the go.</b> Its challenging and
            well-organized curriculum promotes<b>learning in a practical way</b>
            where they<b
              >learn to build projects from scratch, work with teams, and gives
              you the education to find information for yourself.</b
            >
          </p>
          <p class="fs-4 text-left pt-4">
            <i
              >It encourages you to try something new, develop relevant skills
              for the industry, learn fundamentals and solve challenges on your
              own.</i
            >
          </p>
          <p class="fs-4 text-left pt-4">
            We believe learning to code is not only limited to school or college
            students but is for anyone who wishes to create smart software
            solutions through coding.
          </p>
        </div>
      </div>
        </div>
    );
}

export default Sectionone;