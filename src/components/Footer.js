import React from "react";

function Footer() {
  return (
    <div >
        <div class="row footer_color py-5 mt-5">
        <div class="col-md-4 text-center">
          <h1>Contact Detail</h1>
          <p>www.doions.com</p>
        </div>
        <div class="col-md-4 text-start">
          <h1>Address</h1>
          <p class="text-wrap w-50">
            1st Floor, Raina Tower, South Civil Lines, Jabalpur, Madhya Pradesh
            482001
          </p>
        </div>
        <div class="col-md-4 text-left pt-5">
          <a target='_blank' href="https://www.facebook.com/doionsengineering"><i class="bi bi-facebook fs-2 me-3 text-white"></i></a>
          <a target='_blank' href="https://www.instagram.com/doionsdotcom/"><i class="bi bi-instagram fs-2 text-white"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
