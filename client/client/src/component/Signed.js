import React from 'react'
import "./../Signed.css"
import ScriptTag from 'react-script-tag';
import { Helmet } from "react-helmet";
import {Routes, Route, useNavigate} from 'react-router-dom';
import ProfilePage from "./ProfilePage";


function Signed(props) {
    const mystyle = {
        position:"absolute",
        top:"520px"
    }
    const mystyle2 = {
        position:"absolute",
        top:"520px",
        left:"50px"
    }
    const mystyle3 = {
      position:"absolute",
      top:"520px",
      left:"90px"
  }
  const mystyle4 = {
    position:"absolute",
    top:"520px",
    left:"200px"
}
    const userData = JSON.parse(sessionStorage.getItem("loggedUser"));
    console.log(userData)
  return (
    <div>
      <div>
       <div></div>
       </div>
        <ScriptTag isHydrating={true} type="text/javascript" src="../ui.js" />
    <div class="card">
  <div class="ds-top"></div>
  <div class="avatar-holder">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dB5ERe0v9QUXux7rr6TnHW9nNlvmZpWqqA&usqp=CAU" ></img>
  </div>
  <div class="name">
    <a href="/Signed">{userData.username}</a>
    {/* <h6 title="Followers"><i class="fas fa-users"></i> <span class="followers">90</span></h6> */}
  </div>
  <div class="button">
    <a href="#" class="btn" onmousedown="follow();">Follow <i class="fas fa-user-plus"></i></a>
  </div>
  <div class="ds-info">
    <div class="ds pens">
      <h6 title="Number of pens created by the user">Research papers <i class="fas fa-edit"></i></h6>
      <p>29</p>
    </div>
    <div class="ds projects">
      <h6 title="Number of projects created by the user">Projects completed<i class="fas fa-project-diagram"></i></h6>
      <p>2</p>
    </div>
    <div class="ds posts">
      <h6 title="Number of posts">current position <i class="fas fa-comments"></i></h6>
      <p>{userData.cur_pos}</p>
    </div>
  </div>
  <div class="ds-skill">
    <h6>Skill <i class="fa fa-code" aria-hidden="true"></i></h6>
    {userData.skills.map((mb) => (
            <div class="skill html">
            <h6><i class="fab fa-html5"></i>{mb.name}</h6>
            <div class="bar bar-html" style={{width:(mb.level*20)  }}>
              <p>{mb.level}</p>
            </div>
          </div>
                 ))}
  {/* const navigate = useNavigate();

const navigateToContacts = () => {
  // 👇️ navigate to /contacts
  navigate('./ProfilePage');
}; */}
    {/* <div>
      <div>
        <button onClick={navigateToContacts}>update</button>
        </div>
        </div>
        ); */}

    {/* <div class="skill html">
      <h6><i class="fab fa-html5"></i> HTML5 </h6>
      <div class="bar bar-html">
        <p>95%</p>
      </div>
    </div> */}
    {/* <div class="skill css">
      <h6><i class="fab fa-css3-alt"></i> CSS3 </h6>
      <div class="bar bar-css">
        <p>90%</p>
      </div>
    </div> */}
    {/* <div class="skill javascript">
      <h6><i class="fab fa-js"></i> JavaScript </h6>
      <div class="bar bar-js">
        <p>75%</p>
      </div>
    </div> */}
    
  </div>
  <div><a href='https://www.indeed.com/career-advice/resumes-cover-letters/project-management-skills' style={mystyle}><button>more</button></a></div>
  <div><a href='/logout' style={mystyle3}><button>home</button></a></div>
  <div><a href='https://react-job-listing-website.vercel.app/' style={mystyle4}><button>available jobs for react</button></a></div>
   
</div>
</div>

  )

}

export default Signed;