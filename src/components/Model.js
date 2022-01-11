import React from "react";

function Model() {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              {/* <!-- <h5 class="modal-title" id="exampleModalLabel"></h5> --> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="design_div">
                <div class="design_div_two">
                  <h1 class="text-start fw-bold px-5  mb-4 py-3">
                    Enquiry form
                  </h1>
                </div>
              </div>
              <form>
                {/* <!-- 1............. --> */}
                <div class="row mb-3">
                  <label for="inputName" class="col-sm-4 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" id="inputName" />
                  </div>
                </div>
                {/* <!-- 2................. --> */}
                <div class="row mb-3">
                  <label for="inputDob" class="col-sm-4 col-form-label">
                    Date of Birth
                  </label>
                  <div class="col-sm-8">
                    <input type="Dob" class="form-control" id="inputDob" />
                  </div>
                </div>
                {/* <!-- 3............... --> */}
                <div class="row mb-3">
                  <label for="inputPlace" class="col-sm-4 col-form-label">
                    Place
                  </label>
                  <div class="col-sm-8">
                    <input type="Place" class="form-control" id="inputPlace" />
                  </div>
                </div>
                {/* <!-- 4............... --> */}
                <div class="row mb-3">
                  <label for="inputAge" class="col-sm-4 col-form-label">
                    Age
                  </label>
                  <div class="col-sm-8">
                    <input type="Age" class="form-control" id="inputAge" />
                  </div>
                </div>
                {/* <!-- 5.............. --> */}
                <div class="row mb-3">
                <div className="row mb-3 gender">
                  <label for="inputGender" class="col-sm-4 col-form-label">
                    Gender
                  </label>
                  <div class="col-sm-8">
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check_t"
                        onclick="onlytwo(this)"
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check_t"
                        onclick="onlytwo(this)"
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check_t"
                        onclick="onlytwo(this)"
                      />
                      Others
                    </label>
                    </div>
                  </div>
                </div>
                {/* <!-- 6.............. --> */}
                <div class="row mb-3">
                  <label for="inputSchool" class="col-sm-4 col-form-label">
                    School
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="School"
                      class="form-control"
                      id="inputSchool"
                    />
                  </div>
                </div>
                {/* <!-- 7.............. --> */}
                <div class="row mb-3">
                  <label for="inputContactNo" class="col-sm-4 col-form-label">
                    Contact No.
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="ContactNo"
                      class="form-control"
                      id="inputContactNo"
                    />
                  </div>
                </div>
                {/* <!-- 8.............. --> */}
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-8">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>
                {/* <!-- 9.............. --> */}
                <div class="row mb-3">
                  <label
                    for="inputCodingproficiency"
                    class="col-sm-4 col-form-label"
                  >
                    Coding proficiency
                  </label>
                  <div class="col-sm-8 d-flex flex-column">
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onclick="onlyOne(this)"
                      />
                      Beginner
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onclick="onlyOne(this)"
                      />
                      Intermediate
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onclick="onlyOne(this)"
                      />
                      Advanced
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-warning btn-lg fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal_two"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Model;
