// import React, { useState } from "react";
// function Model() {
//   // const[Name, setName] = useState('');
//   // const[Namerr, setNamerr] = useState('')
//   // function handleName(e){
//   //     setNamerr('');
//   //     setName(e.target.value);
//   // }
// function handleSubmit(e){
//   // alert("hello")
//   // e.preventDefault();
//   // if(Name !== ''){
//   // }else{
//   //   setNamerr('Name is required')
//   // }
//  console.log("pressed");
// }

//   return (
//     <div
//       class="modal fade"
//       id="exampleModal"
//       tabindex="-1"
//       aria-labelledby="exampleModalLabel"
//       aria-hidden="true"
//     >
//       <div class="modal-dialog modal-dialog-centered modal-lg">
//         <div class="modal-content">
//           <div class="modal-header">
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div class="modal-body">
//             <div class="design_div">
//               <div class="design_div_two">
//                 <h1 class="text-start fw-bold px-5  mb-4 py-3">Enquiry form</h1>
//               </div>
//             </div>
//             </div>
//               <div>
//                   <form class='p-2' onSubmit={handleSubmit}>
//                     <div class="row mb-3">
//                       <label
//                         class="col-sm-4 col-form-label"
//                       >
//                         Name
//                       </label>
//                       <div class="col-sm-8">
//                         <input
//                           type="text"
//                           class="form-control"
//                           id="inputName"
//                           // onChange={handleName}
//                           // value={Name}
//                         />
//                       </div>
// {/* {Namerr&&<div className="error-msg">{Namerr}</div>} */}
//                     </div>
//                     {/* <!-- 2................. --> */}
//                     <div class="row mb-3">
//                       <label for="inputDob" class="col-sm-4 col-form-label">
//                         Date of Birth
//                       </label>
//                       <div class="col-sm-8">
//                         <input type="Dob" class="form-control" id="inputDob" />
//                       </div>
//                     </div>
//                     {/* <!-- 3............... --> */}
//                     <div class="row mb-3">
//                       <label for="inputPlace" class="col-sm-4 col-form-label">
//                         Place
//                       </label>
//                       <div class="col-sm-8">
//                         <input
//                           type="Place"
//                           class="form-control"
//                           id="inputPlace"
//                         />
//                       </div>
//                     </div>
//                     {/* <!-- 4............... --> */}
//                     <div class="row mb-3">
//                       <label for="inputAge" class="col-sm-4 col-form-label">
//                         Age
//                       </label>
//                       <div class="col-sm-8">
//                         <input type="Age" class="form-control" id="inputAge" />
//                       </div>
//                     </div>
//                     {/* <!-- 5.............. --> */}
//                     <div class="row mb-3">
//                       <div className="row mb-3 gender">
//                         <label
//                           for="inputGender"
//                           class="col-sm-4 col-form-label"
//                         >
//                           Gender
//                         </label>
//                         <div class="col-sm-8">
//                           <label>
//                             <input
//                               type="radio"
//                               class="mx"
//                               name="check_t"
//                               onclick="onlytwo(this)"
//                             />
//                             Female
//                           </label>
//                           <label>
//                             <input
//                               type="radio"
//                               class="mx"
//                               name="check_t"
//                               onclick="onlytwo(this)"
//                             />
//                             Male
//                           </label>
//                           <label>
//                             <input
//                               type="radio"
//                               class="mx"
//                               name="check_t"
//                               onclick="onlytwo(this)"
//                             />
//                             Others
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <!-- 6.............. --> */}
//                     <div class="row mb-3">
//                       <label for="inputSchool" class="col-sm-4 col-form-label">
//                         School
//                       </label>
//                       <div class="col-sm-8">
//                         <input
//                           type="School"
//                           class="form-control"
//                           id="inputSchool"
//                         />
//                       </div>
//                     </div>
//                     {/* <!-- 7.............. --> */}
//                     <div class="row mb-3">
//                       <label
//                         for="inputContactNo"
//                         class="col-sm-4 col-form-label"
//                       >
//                         Contact No.
//                       </label>
//                       <div class="col-sm-8">
//                         <input
//                           type="ContactNo"
//                           class="form-control"
//                           id="inputContactNo"
//                         />
//                       </div>
//                     </div>
//                     {/* <!-- 8.............. --> */}
//                     <div class="row mb-3">
//                       <label for="inputEmail3" class="col-sm-4 col-form-label">
//                         Email
//                       </label>
//                       <div class="col-sm-8">
//                         <input
//                           type="email"
//                           class="form-control"
//                           id="inputEmail3"
//                         />
//                       </div>
//                     </div>
//                     {/* <!-- 9.............. --> */}
//                     <div class="row mb-3">
//                       <label
//                         for="inputCodingproficiency"
//                         class="col-sm-4 col-form-label"
//                       >
//                         Coding proficiency
//                       </label>
//                       <div class="col-sm-8 d-flex flex-column">
//                         <label>
//                           <input
//                             type="radio"
//                             class="mx"
//                             name="check"
//                             onclick="onlyOne(this)"
//                           />
//                           Beginner
//                         </label>
//                         <label>
//                           <input
//                             type="radio"
//                             class="mx"
//                             name="check"
//                             onclick="onlyOne(this)"
//                           />
//                           Intermediate
//                         </label>
//                         <label>
//                           <input
//                             type="radio"
//                             class="mx"
//                             name="check"
//                             onclick="onlyOne(this)"
//                           />
//                           Advanced
//                         </label>
//                       </div>
//                     </div>
//                   </form>
//           </div>
//           <div class="modal-footer d-flex justify-content-center">
//             <button
//               type="submit"
//               class="btn btn-warning btn-lg fw-bold"
//             >
//               submit
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }

// export default Model;

import React, { useState } from "react";

function Model() {
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
    setEmailerr('');
    setEmail(e.target.value)
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
      const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (emailRegex.test(Email)) {
      setEmailerr("");
      setEmail(Email);
    } else {
      setEmailerr("Enter valid email");
    }
    } else {
      setEmailerr("required");
    }
  }
  return (
    <div>
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
                    Name
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
                    Date of Birth
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
                    Place
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
                    Age
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
                    Gender
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
                    School
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
                    Contact No.
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
                    Email
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
                    Coding proficiency
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
                <div class="modal-footer d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-warning btn-lg fw-bold"
                    // data-bs-toggle="modal"
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
    </div>
  );
}
export default Model;
