// import React, { useState } from "react";
// import Doionsimg2 from "../../images/Doionsimg2.png"
// import Model from "../Model";
// function Herosection() {
//   // const [get, set] = useState(false);
//   // function newHandler(){
//   //   set(true);
//   // }
//   return (
//     <div className="hero-section">
//       <div className="container-fluid">
//         <div
//         class="row section_one_img d-flex flex-row justify-content-start ms-2"
//       >
//         <div
//           class="col-md-5 bg-light opacity-75 py-5 px-5 section1_cont text-dark text-center justify-content-center"
//         >
//         <div class="section1_heading">
//           <h1 class="fw-bold">Coding Bootcamp</h1>
//           <p>Now in Jabalpur</p>
//           <p class="fw-bold">Become a Full-stack developer in 12 weeks</p>
//           <button
//             type="button" 
//             class="btn enquire_btn btn-sm fw-bold my-4 text-nowrap"
//             data-bs-toggle="modal"
//             data-bs-target="#exampleModal"
//           >
//             Enquire now
//           </button>
//           </div>
//         </div>
//       </div>
//       </div>
//       <Model/>
//     </div>

//   );
// }

// export default Herosection;
// import React from "react";
// //import Doionsimg2 from "../../images/Doionsimg2.png"
// import {ReactComponent as Heroscreen} from "../../images/Heroscreen.svg"
// function Herosection() {
//   return (
//     <div className="hero-section">
//       <div className="container-fluid">
//           <div class="row justify-content-center">
//             <div class="col-md-5 bg-light justify-content-center">
//                <Heroscreen/>   
//           </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Herosection;




import React from 'react';
import Model from "../Model"
function Herosection() {
  return (
    <div>
      <div class="row p-0 m-0 d-flex flex-row justify-content-center">
        <div class="section_one_img p-0 m-0">
          <div class="col-6 col-md-6 h-100 position-relative">
            <div
              class="position-absolute bg-white opacity-75 top-0 end-0 bottom-0 start-0 h-100"
            ></div>
            <div class="position-absolute h-100 text-dark">
              <div class="section1_heading text-center">
                <h1 class="fw-bold">Coding Bootcamp</h1>
                <p classs="">Now in Jabalpur</p>
                <p class="p_two fw-bold">
                  Become a <br />Full-stack developer<br />
                  in 12 weeks
                </p>
                <button
                  type="button"
                  class="btn btn-lg enquire_btn fw-bold text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Enquire now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model/>
    </div>
  );
}

export default Herosection;