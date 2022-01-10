import React,{useState} from 'react';
import {
  Link,
} from "react-router-dom";
import Doionsimg from "../images/Doionsimg.png"
import Model from './Model';
function Header() {
    const [Open, setOpen] = useState(false);
    const [Burger, setBurger] = useState(false);
    function handler(){
      setOpen(true);
    }
    function burgerHandler(){
      console.log("hello");
      setBurger(true);
    }
    return (  
        <div>
    <header class="header">
      <nav class="navbar">

       {/* <a href="/" className="nav-logo"> <img src={Doionsimg}/></a>  */}
       <Link className='nav-logo' to="/"><img src={Doionsimg}/></Link>
        <ul class="nav-menu">
          <li class="nav-item">
            {/* <a href="/a" className="nav-link">About Us</a> */}
            <Link to='/aboutus-page' className="nav-link">About Us</Link>
          </li>
          <li class="nav-item">
            <Link to="/courses" className="nav-link">Courses</Link>
          </li>
          <li class="nav-item">
            <a href="https://doions-education.myty.in/" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
                <button 
                  type="button"
                  class="btn enquire_btn btn-lg fw-bold me-4 my-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={handler}
                >
                  Enquire now
                </button>
          </li>
        </ul>
        <div class="hamburger" onClick={burgerHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
    <Model Open={Open}/>
        </div>
  
    );
}

export default Header;



