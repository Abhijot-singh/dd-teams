import React, { useState } from 'react';
import Opensectwo from './Opensectwo';
function Sectwo() {
    const [Open, setOpen] = useState(false);
    function handler(){
        console.log("opened"); 
        setOpen(true);  
        if(Open==true){
            setOpen(false);
        }   
    }
    return (
        <div>
            <div class="courses_div my-2 d-flex">
            <div class="p-2"><h1>Coding as a hobby</h1></div>
            <div class="ms-auto p-2" id="show_one">
              <i onClick={handler} class="bi bi-chevron-double-down h1 rotate"></i>
            </div>
          </div>
             <Opensectwo Open={Open}
             />
        </div>
    );
}

export default Sectwo;