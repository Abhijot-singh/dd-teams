import React, { useState } from "react";
import Doionsimg2 from "../../images/Doionsimg2.png"
import Model from "../Model";
function Herosection() {
  const [get, set] = useState(false);
  function newHandler(){
    set(true);
  }
  return (
    <div className="hero-section">
      <div className="container-fluid">
        <div
        class="row section_one_img d-flex flex-row justify-content-start ms-2"
      >
        <div
          class="col-md-5 bg-light opacity-75 py-5 px-5 section1_cont text-dark text-center justify-content-center"
        >
        <div class="section1_heading">
          <h1 class="fw-bold">Coding Bootcamp</h1>
          <p>Now in Jabalpur</p>
          <p class="fw-bold">Become a Full-stack developer in 12 weeks</p>
          <button
            type="button" onClick={newHandler}
            class="btn enquire_btn btn-sm fw-bold my-4 text-nowrap"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Enquire now
          </button>
          </div>
        </div>
      </div>
      </div>
      <Model get={get}/>
    </div>

  );
}

export default Herosection;
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