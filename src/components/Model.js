import React, { useState } from "react";
// import Success from "./Success";
import succ from "../images/Group 195.png";
import axios from "axios";

function Model() {
  let count = 0;
  const [Name, setName] = useState("");
  const [Namerr, setNamerr] = useState("");

  const [Dob, setDob] = useState("");
  const [Doberr, setDoberr] = useState("");

  const [Place, setPlace] = useState("");
  const [Placeerr, setPlacerr] = useState("");

  const [Age, setAge] = useState("");
  const [Ageerr, setAgeerr] = useState("");

  const [School, setSchool] = useState("");
  const [Schoolerr, setSchoolerr] = useState("");

  const [Gender, setGender] = useState("");
  const [Gendererr, setGendererr] = useState("");

  const [Contanct, setContanct] = useState("");
  const [Contancterr, setContancterr] = useState("");

  const [Skill, setSkill] = useState("");
  const [Skillerr, setSkillerr] = useState("");

  const [Email, setEmail] = useState("");
  const [Emailerr, setEmailerr] = useState("");

  const [success, setsuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [_success, set_success] = useState(false);
  async function submitApplication() {
    try {
      setLoading(true);
      const data = {
        email: Email,
        contact: Contanct,
        name: Name,
        dateOfBirth: Dob,
        age: Age,
        gender: Gender,
        place: Place,
        school: School,
        codingProficiency: Skill,
      };
      const res = await axios.post(
        // "https://c0e6-103-246-41-141.ngrok.io/api/apply/bootcamp",
        "https://mytym.in/bot/api/apply/bootcamp",
        data
      );
      console.log(res.data);
      if (res.status === 200) {
        setLoading(false);
        setsuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setsuccess(false);
    }
  }

  function handleName(e) {
    setNamerr("");
    setName(e.target.value);
  }
  function handleDob(e) {
    setDoberr("");
    setDob(e.target.value);
  }
  function handlePlace(e) {
    setPlacerr("");
    setPlace(e.target.value);
  }
  function handleAge(e) {
    setAgeerr("");
    setAge(e.target.value);
  }
  function handleGender(e) {
    setGendererr("");
    setGender(e.target.value);
  }
  function handleSchool(e) {
    setSchoolerr("");
    setSchool(e.target.value);
  }
  function handleContanct(e) {
    setContancterr("");
    setContanct(e.target.value);
  }
  function handleSkill(e) {
    setSkillerr("");
    setSkill(e.target.value);
  }
  function handleEmail(e) {
    setEmailerr("");
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Name !== "") {
    } else {
      setNamerr("required");
    }

    if (Dob !== "") {
    } else {
      setDoberr("Required");
    }

    if (Place !== "") {
    } else {
      setPlacerr("required");
    }

    if (Age !== "") {
    } else {
      setAgeerr("required");
    }

    if (Gender !== "") {
    } else {
      setGendererr("required");
    }

    if (School !== "") {
    } else {
      setSchoolerr("required");
    }

    if (Contanct !== "") {
      const phoneRegex = /^[7-9][0-9]{9}$/;
      if (phoneRegex.test(Contanct)) {
        setContancterr("");
      } else {
        setContancterr("enter valid phone number");
      }
    } else {
      setContancterr("required");
    }

    if (Skill !== "") {
    } else {
      setSkillerr("required");
    }

    if (Email !== "") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (emailRegex.test(Email)) {
        setEmailerr("");
        setEmail(Email);
      } else {
        setEmailerr("Enter valid email");
      }
    } else {
      setEmailerr("required");
    }

    setsuccess(true);
    submitApplication();
  }

  return (
    <div>
      <div
        class="modal fade"
        data-bs-backdrop="static"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
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
                  <h1 class="text-start px-5 my-1 py-3 mb-4">Enquiry form</h1>
                </div>
              </div>
              <form id="form" onSubmit={handleSubmit}>
                <div class="row mb-3">
                  <label
                    for="inputName"
                    class="col-sm-4 col-form-label"
                    name="name"
                  >
                    Name*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputName"
                      onChange={handleName}
                      value={Name}
                    />
                  </div>
                  {Namerr && <div className="error-msg">{Namerr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputDob" class="col-sm-4 col-form-label">
                    Date of Birth*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="date"
                      class="form-control"
                      id="inputDob"
                      onChange={handleDob}
                    />
                  </div>
                  {Doberr && <div className="error-msg">{Doberr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputPlace" class="col-sm-4 col-form-label">
                    Place*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="place"
                      class="form-control"
                      id="inputPlace"
                      onChange={handlePlace}
                    />
                  </div>
                  {Placeerr && <div className="error-msg">{Placeerr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputAge" class="col-sm-4 col-form-label">
                    Age*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="number"
                      class="form-control"
                      id="inputAge"
                      onChange={handleAge}
                    />
                  </div>
                  {Ageerr && <div className="error-msg">{Ageerr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputGender" class="col-sm-4 col-form-label">
                    Gender*
                  </label>
                  <div class="col-sm-8">
                    <label>
                      <input
                        type="radio"
                        id="Female"
                        class="mx-3"
                        name="check_t"
                        onChange={handleGender}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Male"
                        class="mx-3"
                        name="check_t"
                        onChange={handleGender}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="Others"
                        class="mx-3"
                        name="check_t"
                        onChange={handleGender}
                      />
                      Others
                    </label>
                  </div>
                  {Gendererr && <div className="error-msg">{Gendererr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputSchool" class="col-sm-4 col-form-label">
                    School*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputSchool"
                      onChange={handleSchool}
                    />
                  </div>
                  {Schoolerr && <div className="error-msg">{Schoolerr}</div>}
                </div>

                <div class="row mb-3">
                  <label for="inputContactNo" class="col-sm-4 col-form-label">
                    Contact No.*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type=""
                      class="form-control"
                      id="inputContactNo"
                      onChange={handleContanct}
                    />
                  </div>
                  {Contancterr && (
                    <div className="error-msg">{Contancterr}</div>
                  )}
                </div>

                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-4 col-form-label">
                    Email*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      onChange={handleEmail}
                    />
                  </div>
                  {Emailerr && <div className="error-msg">{Emailerr}</div>}
                </div>

                <div class="row mb-3">
                  <label
                    for="inputCodingproficiency"
                    class="col-sm-4 col-form-label"
                  >
                    Coding proficiency*
                  </label>
                  
                  <div class="col-sm-8 d-flex flex-column">
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onChange={handleSkill}
                      />
                      Beginner
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onChange={handleSkill}
                      />
                      Intermediate
                    </label>
                    <label>
                      <input
                        type="radio"
                        class="mx-3"
                        name="check"
                        onChange={handleSkill}
                      />
                      Advanced
                    </label>
                  </div>
                  {Skillerr && <div className="error-msg">{Skillerr}</div>}
                </div>
                <small className="error-msg">*(required)</small>
                <div class="modal-footer d-flex justify-content-center">
                  <button
                    type="submit"
                    disabled={!Name || !Email || !Contanct || !Dob ||!Place || !Age || !Gender || !School || !Skill}
                    class="btn btn-warning btn-lg fw-bold"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    data-bs-target="#exampleModal_two"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Success success={success}/> */}
      <div
        class="modal fade"
        id="exampleModal_two"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {loading ? (
                <>Loading...</>
              ) : (
                <div>
                  {success ? (
                    <div>
                      <p class="text-center">
                        <img src={succ} alt="" />
                      </p>
                      <p class="h4 text-center">
                        Form submitted succesfully. Please check your email for
                        futher details.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>Duplicate Email or Contact information is used.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Model;
