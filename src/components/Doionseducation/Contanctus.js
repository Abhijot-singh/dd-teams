import React from "react";
import MyComponent from "./MyComponent";
function Contanctus() {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-10">
          <div className="design_div">
              <div className="design_div_two">
                <h1 className="px-4 py-3 my-5">Contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          
            <MyComponent className="col-md-5 col-lg-12"/>
          
          <div className="col-md-5">
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Username"
                />
              </div>
              <div className="mb-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div class="my-3 d-inline-flex">
                <lavel className="text-start mx-4">2+2=</lavel>
                <input type="text" class="form-control w-25" />
                <button
                  type="submit"
                  className="btn enquire_btn btn-lg fw-bold ms-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Contanctus;
