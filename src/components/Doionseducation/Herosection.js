import React from "react";
import Doionsimg2 from "../../images/Doionsimg2.png"
function Herosection() {
  return (
    <div className="hero-section">
      <div className="container-fluid">
        <div>
          <div class="row justify-content-center">
            <div class="col-md-5 bg-light p-5 py-5 text-dark text-center justify-content-center">
              <h1 class="fw-bold">Coding Bootcamp</h1>
              <p>Now in Jabalpur</p>
              <p class="fw-bold">Become a Full-stack developer in 12 weeks</p>
              <button
                type="button"
                class="btn enquire_btn btn-lg fw-bold me-4 my-4 text-nowrap"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enquire now
              </button>
            </div>
            <div class="col-md-5">
              <img src={Doionsimg2} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
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