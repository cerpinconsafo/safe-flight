import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./components/Login"
import Navbar from "./components/Navigation/Navbar.js";
import SignIn from "./components/Signin"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faPlane, faUser, faIdCard, faCalendarAlt, faHotel, faCarSide, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faPlane, faUser, faIdCard, faCalendarAlt, faHotel, faCarSide, faMoneyBillWave)



function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={CreateUser} />
        <Route path="/users/login" exact component={SignIn} />
      </div>
    </Router>
  );
}

export default App;
