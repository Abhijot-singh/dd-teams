import React from 'react';
import Model from './Model';
function Stickybar() {
    return (
        <div>
             <div class="row footer_color py-1 footer_sticky fixed-bottom">
      <div class="col-12 d-flex justify-content-end">
        <button type="button" class="btn btn-lg enquire_btn fw-bold text-nowrap me-4" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Enquire now
        </button>
      </div>
    </div> 
    <Model/>
        </div>
    );
}

export default Stickybar;