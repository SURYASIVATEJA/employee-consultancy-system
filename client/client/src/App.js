import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Signed from "./component/Signed";

import "./App.css";
import ProfilePage from "./component/ProfilePage";
import RegistrationPage from "./component/RegistrationPage";
import axios from "axios";


function App() {
  <Routes>
     <Route path='/RegistrationForm' element={<RegistrationPage/>}/>
  </Routes>
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);



  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    axios.post("https://employee-client-svis.onrender.com/login",{name:uname.value}).then((response)=>{
      if(response.data[0].password === pass.value) {
        setIsSubmitted(true);
        sessionStorage.setItem("loggedUser",JSON.stringify(response.data[0]))
        //window.location = "/Signed"

      }
      else {
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    })
    const database = JSON.parse(sessionStorage.getItem("users"))['users']
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //     console.log(userData)
    //     sessionStorage.setItem("loggedUser",JSON.stringify(userData))
    //     window.location = "/Signed"
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <a href="/RegistrationForm">Signup</a>
      </form>
    </div>  
  );
  if(sessionStorage.getItem("loggedUser") != null && window.location.href==="http://localhost:"+window.location.port+"/logout"){
    sessionStorage.clear()
    window.location = "/"
  }
  // if(sessionStorage.getItem("loggedUser") != null && window.location.href==="http://localhost:"+window.location.port+"/Signed"){
  //   console.log("signed");
  //   return(
  //   <Signed></Signed>)
  // }
  else if (window.location.href==="http://localhost:"+window.location.port+"/RegistrationForm"){
    console.log(window.location.port)
    return(<RegistrationPage></RegistrationPage>)
  }
  else if(sessionStorage.getItem("loggedUser") === null){
  return (
    <div className="app">
      <div className="login-form">
        {renderForm}
        
      </div>
    </div>
  );
  }
  else if(sessionStorage.getItem("loggedUser") !=null) {
    return(
      <Signed></Signed>)
  }

  // else{
  //   return(
  //     <div>
  //     <div>hello</div>
  //     <Routes>
  //       <Route path= 'Signed' element={<Signed/>} />
  //     </Routes>
  //     </div>
  //   )
  // }
}

export default App;
