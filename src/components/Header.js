import React from 'react';
import {
  Link,
} from "react-router-dom";
import Doionsimg from "../images/Doionsimg.png"
function Header() {
    // function burgerHandler(){
    //   console.log("hello");
    //   setBurger(true);
    // }
    return (  
    //     <div>
    // <header class="header">
    //   <nav class="navbar">

    //    {/* <a href="/" className="nav-logo"> <img src={Doionsimg}/></a>  */}
    //    <Link className='nav-logo' to="/"><img src={Doionsimg}/></Link>
    //     <ul class="nav-menu">
    //       <li class="nav-item">
    //         {/* <a href="/a" className="nav-link">About Us</a> */}
    //         <Link to='/aboutus-page' className="nav-link">About Us</Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link to="/courses" className="nav-link">Courses</Link>
    //       </li>
    //       <li class="nav-item">
    //         <a href="https://doions-education.myty.in/" className="nav-link">Blog</a>
    //       </li>
    //       <li className="nav-item" >
    //             <button 
    //               type="button"
    //               class="btn enquire_btn btn-lg fw-bold me-4 my-4"
    //               data-bs-toggle="modal"
    //               data-bs-target="#exampleModal"
    //             >
    //               Enquire now
    //             </button>
    //       </li>
    //     </ul>
    //     <div class="hamburger" >
    //       <span className="bar"></span>
    //       <span className="bar"></span>
    //       <span className="bar"></span>
    //     </div>
    //   </nav>
    // </header>
    //     </div>
    // <div>
    //   <div class="row">
    //   <div class="col-12 mx-auto">
    //     <nav class="navbar navbar-expand-lg">
    //       <div class="container-fluid">
    //         {/* <a href="#" class="nav-logo"> <img src={Doionsimg}/></a> */}
    //         <Link className='nav-logo' to="/"><img src={Doionsimg}/></Link>
    //         <button
    //           class="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarSupportedContent"
    //           aria-controls="navbarSupportedContent"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div
    //           class="collapse navbar-collapse justify-content-end"
    //           id="navbarSupportedContent"
    //         >
    //           <ul class="navbar-nav ml-auto mb-lg-0 pt-3">
    //             <li class="nav-item my-2 my-sm-0">
    //               {/* <a
    //                 class="nav-link text-white"
    //                 aria-current="page"
    //                 href="aboutUs.html"
    //                 >About Us</a
    //               > */}
    //               <Link to='/aboutus-page' className="nav-link">About Us</Link>
    //             </li>
    //             <li class="nav-item my-2 my-sm-0">
    //               {/* <a class="nav-link text-white" href="coursesOffered.html"
    //                 >Courses</a
    //               > */}
    //               <Link to="/courses" className="nav-link">Courses</Link>
    //             </li>
    //             <li class="nav-item my-2 my-sm-0">
    //               <a class="nav-link text-white" href="https://doions-education.myty.in/">Blog</a>
    //             </li>
    //             <li class="nav-item my-2 my-sm-0">
    //               <button
    //                 type="button"
    //                 class="btn enquire_btn btn-lg fw-bold me-4 my-4"
    //                 data-bs-toggle="modal"
    //                 data-bs-target="#exampleModal"
    //               >
    //                 Enquire now
    //               </button>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    // </div>
      
        <div class="row">
      <div class="col-12 mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            {/* <a href="#" class="nav-logo"> <img src={Doionsimg} /></a> */}
            <Link className='nav-logo' to="/"><img src={Doionsimg}/></Link>
            <button
              class="navbar-toggler btn-close-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" 
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon me-0"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto mb-lg-0 pt-3">
                <li class="nav-item my-2 my-sm-0">
                  {/* <a class="nav-link text-white" aria-current="page" href="#"
                    >About Us</a
                  > */}
                  <Link to='/aboutus-page' className="nav-link text-white">About Us</Link>
                </li>
                <li class="nav-item my-2 my-sm-0">
                  {/* <a class="nav-link text-white" href="#">Courses</a> */}
                  <Link to="/courses" className="nav-link text-white">Courses</Link>
                </li>
                <li class="nav-item my-2 my-sm-0">
                  <a class="nav-link text-white" href="https://doions-education.myty.in/">Blog</a>
                </li>
                <li class="nav-item my-2 my-sm-0">  
                  <button
                    type="button"
                    class="btn enquire_btn btn-lg fw-bold  me-sm-0 my-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Enquire now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  
    );

}

export default Header;



