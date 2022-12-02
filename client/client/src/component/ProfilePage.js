import React, {createElement, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./Profile.css"

function ProfilePage () {

  // const [formData, setFormData] = useState({
  //   username: "",
  //   skills: 0,
  //   cur_pos:"abcd"
  // })
  var userData = JSON.parse(sessionStorage.getItem("loggedUser"));
  const[username,setusername] = useState(userData['username'])
  const[cur_pos,setCurPos] = useState(userData['cur_pos'])
  let a= new Array(3);
  a= userData['skills']
  // if(userData['skills'][0]!=null){
  // const[skillName1,setskillName1] = useState(userData['skills'][0]['name'])}
  // if(userData['skills'][1]!=null){
  // const[skillName2,setskillName2] = useState(userData['skills'][1]['name'])}
  // if(userData['skills'][2]!=null){
  // const[skillName3,setskillName3] = useState(userData['skills'][2]['name'])}

  // if(userData['skills'][0]!=null){
  //   const[skillLevel1,setSkillLevel1] = useState(userData['skills'][0]['level'])}
  //   if(userData['skills'][1]!=null){
  //   const[skillLevel2,setSkillLevel2] = useState(userData['skills'][1]['level'])}
  //   if(userData['skills'][2]!=null){
  //   const[skillLevel3,setSkillLevel3] = useState(userData['skills'][2]['level'])}


  const handleSubmit = (e) =>{
    e.preventDefault()
    userData['username'] = username;
    userData['cur_pos'] = cur_pos;
    sessionStorage.setItem("loggedUser",JSON.stringify(userData));
    window.location = "/Signed";
}

return(
  <div className="app">
  <div className="login-form">
  <div className="form">
    <form onSubmit={handleSubmit} id="demo">
    <h1> Update Form </h1>
    <div className="input-container">
    <label>name</label>
    <input
          type="text" 
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
    </div>
    
    <div className="input-container">
    <label>Current Position</label>
    <input
          type="text" 
          value={cur_pos}
          onChange={(e) => setCurPos(e.target.value)}
        />
    <input type="submit" value="Submit"/>
    </div>

    
  </form> 
  </div> 
  </div>
  </div>
    
)       
 }

export default ProfilePage;