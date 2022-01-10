import React from 'react';

function Opensectwo({Open}) {
    if(Open == true){
    return (
        <div>
             <div class="menu_one">
            <div class="row justify-content-center">
              <div class="col-md-10 my-5">
                <p>
                  <b>
                    Teach your kids a new skill or get yourself certified with
                    our interactive programming courses </b
                  >& make yourself stand apart from the crowd.
                  <b
                    >If you dream of creating your own website or an app or a
                    game, we are here to help in your learning journey.</b
                  >
                  Join our short-term hobby courses where you'll be guided by a
                  team of experts to help you accomplish your dream project.
                </p>
                <p>
                  The classes will be of<b>
                    4 weeks, total duration will be 30 hours/ month.</b
                  >
                  Out of which 10 hours will be classes and 20 hours will be
                  practicals/lab sessions.
                </p>
                <div class="table-responsive-md"> 
                <table class="table table-bordered border-secondary text-center">
                  <thead>
                    <tr>
                      <th scope="col">Course Name</th>
                      <th scope="col">Course contents</th>
                      <th scope="col">Duration</th>
                      <th scope="col">total hours</th>
                      <th scope="col">Timings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Coding as a hobby</td>
                      <td>fundamentals of programming</td>
                      <td>4 weeks</td>
                      <td>
                        30 hours/ a month 10 hours classes, 20 hours lab
                        sessions
                      </td>
                      <td>9.00 AM - 6.00 PM every weekend</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    }
    else{
        return <div/>
    }
}

export default Opensectwo;