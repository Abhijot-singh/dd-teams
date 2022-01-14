import React from "react";
import "../styles/App.css";
import Homepage from "./Homepage";
import AboutusPage from "./AboutusPage";
import Courses from "./Courses";
//import Codingcareer from "./Doionseducation/threeCourses/Codingcareer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/aboutus-page">
            <AboutusPage />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          {/* <Route path="/courses/codin">
            <Codingcareer />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
