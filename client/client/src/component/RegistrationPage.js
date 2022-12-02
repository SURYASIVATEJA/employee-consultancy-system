import React, { useState } from "react";
import "../App.css";
import "../RegistrationPage.css";
import ScriptTag from 'react-script-tag';
import axios from "axios";

function RegistrationPage(){

    const handleSubmit = (event) => {
         event.preventDefault();
         var{uname,pass,current_position,Skill1,level1,Skill2,level2,Skill3,level3}=document.forms[0];
         var newUsername = uname.value;
         var newPass = pass.value;
         var newCurpos = current_position.value;
         var newSkill1 = Skill1.value;
         var newLevel1 = level1.value;
         var newSkill2 = Skill2.value;
         var newLevel2 = level2.value;
         var newSkill3 = Skill3.value;
         var newLevel3 = level3.value;
         console.log(newLevel1);
         let skillArray =[];
         if(newSkill1 != "") {
          let skill = {"name":newSkill1,"level":parseInt(newLevel1)}
          skillArray.push(skill);
         }
         if(newSkill2 != "") {
          let skill = {"name":newSkill2,"level":parseInt(newLevel2)}
          skillArray.push(skill);
         }
         if(newSkill3 != "") {
          let skill = {"name":newSkill3,"level":parseInt(newLevel3)}
          skillArray.push(skill);
         }

         let user = {
          username:newUsername,
          password:newPass,
          cur_pos:newCurpos,
          skills:skillArray
         }
         console.log(user)

         axios.post("/newstud",{newUser:user});
         window.location = "/";
        //  console.log(response);
        //  if(response.status === "success"){
        //   window.location = "/";
        //  }

    }
    return(
<div className="form">
    <div className="app">
      <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>

        <div className="input-container">
          <label>current position </label>
          <input type="text" name="current_position" required />  
        </div>

        <div className="input-container">
          <label>Skill 1 </label>
          <input type="text" name="Skill1"  />  
        </div>
<label>Skill 1 level </label>
<select name="level1" id="cars">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  
</select>

<div className="input-container">
          <label>Skill 2 </label>
          <input type="text" name="Skill2"  />  
        </div>
<label>Skill 2 level </label>
<select name="level2" id="cars">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  
</select>

<div className="input-container">
          <label>Skill 3 </label>
          <input type="text" name="Skill3"  />  
        </div>
<label>Skill 3 level </label>
<select name="level3" id="cars">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  
</select>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <a href="/">Sign in</a>
    </div>
    </div>
    </div>
    )
}

export default RegistrationPage;
