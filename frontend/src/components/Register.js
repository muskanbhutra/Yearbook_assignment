import "./Login.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

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
const Register = () => {
  var [status, setStatus] = useState('')
    const [student, setStudent] = useState(
    {
        username: '',
        roll: '',
        password: '',
        otp_field: '',
        pointer: 0,
        otp: ''
    }
)
function handleChange(e) {
    setStudent( {...student, [e.target.name]: e.target.value} )
}
const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/register/", student, { headers: { 'X-CSRFToken': csrftoken }})
    .then(function(res){
      console.log(res)
      status = res.data['status']
      setStatus(res.data['status'])
      student.otp = res.data[0]
      setStudent( {...student, otp: res.data[0]} )
      // console.log(student.otp)
    })
}
    return ( 
        <div id="loginform">
          <p>{status}</p>
        <h2 id="headerTitle">Welcome to Yearbook!</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <div class="row">
    <label>Username</label>
    <input type='text' placeholder='Enter your username' name='username' value={student.username} onChange={handleChange}/>
  </div>  
  <div class="row">
    <label>Roll Number</label>
    <input type='text' placeholder='Enter your roll number' name='roll' value={student.roll} onChange={handleChange}/>
  </div>  
  <div class="row">
    <label>Password</label>
    <input type='password' placeholder='Enter your password' name='password' value={student.password} onChange={handleChange}/>
  </div>  
  <div class="row">
    <label>Otp</label>
    <input type='password' placeholder='Enter the otp' name='otp_field' value={student.otp_field} onChange={handleChange}/>
  </div>  
        </div>
        <div id="button" class="row">
    <button type='submit' onClick={() => setStudent( {...student, pointer: 0} )}>Generate OTP</button>
    </div>
    <div id="button" class="row">
    <button type='submit' onClick={() => setStudent( {...student, pointer: 1} )}>Submit</button>
  </div>
  <Link to ='/' style={{textDecoration: "none"}}><div id="button" class="row"><button>Login</button></div></Link>
  </form>
      </div>
    )
  }

  export default Register;