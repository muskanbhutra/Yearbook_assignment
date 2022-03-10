
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";

function App() {
  var [profile, setProfile] = useState([])
  console.log(profile)
  // const setStudentData = (student) => {
  //     setProfile(student)
  //     console.log(profile)
  // }



  return (
    <Router>
    <div className="App">
      <Routes>
            <Route exact path='/' element={<Login setProfile={setProfile}/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            <Route exact path='/feed' element={<Feed/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
