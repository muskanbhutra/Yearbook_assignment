import "./Login.css";
import Register from "./Register";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
export default function Login({setProfile}) {
  let navigate = useNavigate();
  let [loggedin_student, setLoggedin_student] = useState(null)
  var [status, setStatus] = useState('')
  const [student, setStudent] = useState(
    {
        roll: '',
        password: ''
    }
)
function handleChange(e) {
    setStudent( {...student, [e.target.name]: e.target.value} )
}
const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/login/", student, { headers: { 'X-CSRFToken': csrftoken }})
    .then(function(res){
      console.log(res)
      status = res.data['status']
      setStatus(res.data['status'])
      console.log(status)
      loggedin_student=res.data[0]
      setLoggedin_student(res.data[0])
      // console.log(student.otp)
      setProfile(loggedin_student)
      console.log(loggedin_student!=null)
      if (loggedin_student != null) {
        navigate("../feed");
      }

    })
}

    return ( 
      
        <div id="loginform">
          <p>{status}</p>
        <h2 id="headerTitle">Welcome to Yearbook!</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <div class="row">
    <label>Roll Number</label>
    <input type='text' placeholder='Enter your roll number' name='roll' value={student.roll} onChange={handleChange}/>
  </div>  
  <div class="row">
    <label>Password</label>
    <input type='password' placeholder='Enter your password' name='password' value={student.password} onChange={handleChange}/>
  </div>  
        </div>
        <div id="button" class="row">
    <button type='submit'>Log in</button>
    </div>
    </form>
    
    <Link to ='/register' style={{textDecoration: "none"}}><div id="button" class="row"><button>Create Account</button></div></Link>
      </div>
    )
  }







 
