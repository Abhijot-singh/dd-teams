import React from 'react';
import Doionsimg from "../images/Doionsimg.png"
function Header() {
    // const [Open, setOpen] = useState(false);
    //  function handleburger(){
    //     setOpen(true);
    //  }
    return (
        <div>
              {/* <!-- header code start --> */}
    <header class="header">
      <nav class="navbar">
        <a href="/" className="nav-logo"> <img src={Doionsimg}/></a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/a" className="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a href="/b" className="nav-link">Courses</a>
          </li>
          <li class="nav-item">
            <a href="/c" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
                <button 
                  type="button"
                  class="btn enquire_btn btn-lg fw-bold me-4 my-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Enquire now
                </button>
          </li>
        </ul>
        <div class="hamburger" >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
    {/* <!-- header code end here --> */}

        </div>
    );
}

export default Header;