import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
import MyComponent from "./MyComponent";
function Contanctus() {
  const [name, setname] = useState("");
  const [namerr, setnamerr] = useState("");
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [message, setmessage] = useState("");
  const [messagerr, setmessagerr] = useState("");
  function handlename(e) {
    setnamerr("");
    setname(e.target.value);
  }
  function handlemail(e) {
    setemailerr("");
    setemail(e.target.value);
  }
  function Message(e) {
    setmessagerr("");
    setmessage(e.target.value);
  }
  function submmision(e) {
    e.preventDefault();
    if (name !== "") {
    } else {
      setnamerr("required");
    }
    if (email !== "") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (emailRegex.test(email)) {
        setemailerr("");
        setemail(email);
      } else {
        setemailerr("enter valid email");
      }
    } else {
      setemailerr("required");
    }
    if (message !== "") {
    } else {
      setmessagerr("required");
    }
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="design_div">
            <div className="design_div_two">
              <h1 className="px-4 py-3 my-5">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center py-5">
        <MyComponent className="col-md-4 col-lg-12" />

        <div className="col-md-4">
          <form onSubmit={submmision}>
            <div className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-label="Username"
                onChange={handlename}
              />
              {namerr && <div className="error-msg">{namerr}</div>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                onChange={handlemail}
              />
              {emailerr && <div className="error-msg">{emailerr}</div>}
            </div>
            <div className="input-group">
              <textarea
                className="form-control"
                placeholder="Message"
                aria-label="With textarea"
                onChange={Message}
              ></textarea>
              {messagerr && <div className="error-msg">{messagerr}</div>}
            </div>
            <div class="my-3 d-inline-flex">
              <Recaptcha  sitekey="6Ld9KPEdAAAAABbGoRv1gDZLt_lkaXj6ak1Q4oSl" type="audio" />
              {/* <lavel className="text-start mx-4">package</lavel> */}
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
