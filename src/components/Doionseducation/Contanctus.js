// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MyComponent from "./MyComponent";
import axios from "axios";
import succ from "../../images/Group 195.png"
// import Success from "../Success"
function Contanctus() {
  const [name, setname] = useState("");
  const [namerr, setnamerr] = useState("");
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [message, setmessage] = useState("");
  const [messagerr, setmessagerr] = useState("");

  const [verified, setverified] = useState(false);
  const [verifiederr, setverifiederr] = useState("");

  const [loading, setLoading] = useState(false);

  const [succc, setsuccc] = useState(false);

  const [Checker, setChecker] = useState(false);

  async function submitApp() {
    try {
      const data_two = {
        name: name,
        email: email,
        message: message,
      };
      console.log(data_two);
      const res = await axios.post(
        "https://mytym.in/bot/api/message/doions-education",
        data_two
      );

      console.log(res.data_two);
      if (res.status === 200) {
        setLoading(false);
        setsuccc(true);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  var onloadCallbackkkk = function () {
    console.log("loaded");
  };
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

    submitApp();
  }
  function handlEmail() {
    if (email !== "") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (emailRegex.test(email)) {
        setemailerr("");
        setemail(email);
        setChecker(true);
      } else {
        setChecker(false);
        setemailerr("Enter valid email");
      }
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
      <div className="row justify-content-center py-3 ">
        <div className="col-md-4">
          <MyComponent />
        </div>
        <div className="col-md-4">
          -
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
                onBlur={handlEmail}
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

            <div class="my-3">
              <ReCAPTCHA
                sitekey="6Ld9KPEdAAAAABbGoRv1gDZLt_lkaXj6ak1Q4oSl"
                onChange={() => {
                  setverified(true);
                }}
              />

              <button
                type="submit"
                className="btn enquire_btn btn-lg fw-bold ms-auto"
                disabled={!name || !email || !message || !verified || !Checker}
              >
                Submit
              </button>
            </div>
            {verifiederr && <div className="error-msg">{verifiederr}</div>}
          </form>
        </div>
      </div>
      {succc && (
        <div>
          <p class="text-center">
            <img src={succ} alt="" />
          </p>
          <p class="h4 text-center">
            Form submitted succesfully. Please check your email for futher
            details.
          </p>
        </div>
      )}
    </div>
  );
}

export default Contanctus;
