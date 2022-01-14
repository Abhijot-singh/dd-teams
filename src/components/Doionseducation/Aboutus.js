import React  from "react";
import Doionsimg3 from "../../images/Doionsimg3.png";
import {useHistory} from "react-router-dom"

function Aboutus() {
  let history = useHistory();
  function readMore(){
    window.scrollTo({ top:0, behavior:'auto' }) 
     history.push('/aboutus-page')
  }
  return (
    <div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="design_div">
              <div class="design_div_two">
                <h1 class="px-4 py-3 my-5">About Us</h1>
              </div>
            </div>
            <div>
              <img
                src={Doionsimg3}
                className="w-100 img-fluid section_two_img"
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
              anyone who wishes to learn to code. The classes will be in the
              form of <b>coding boot camps.</b>
              <a href="" onClick={readMore}>Read more...</a>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Aboutus;
