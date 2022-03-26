import React from 'react'
import "./Navbar.css";
import logo from './sarc-logo.png';
import { BsFillHouseFill, BsImages, BsBarChartLineFill, BsFillPersonFill, BsFillQuestionCircleFill, BsPower } from "react-icons/bs";

const Navbar = () => {
return (
    <div>
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Yearbook, 2022</div>
        <div className='navbar__title navbar__item'><img src={logo} alt="Logo" style={{width: "100px"}}/></div>
        <div className='navbar__item'><a href="#"><BsFillHouseFill style={{color: "white"}}/></a></div>
        <div className='navbar__item'><a href="#"><BsImages style={{color: "white"}}/></a></div>
        <div className='navbar__item'><a href="#"><BsBarChartLineFill style={{color: "white"}}/></a></div> 
        <div className='navbar__item'><a href="#"><BsFillPersonFill style={{color: "white"}}/></a></div>
        <div className='navbar__item'><a href="#"><BsFillQuestionCircleFill style={{color: "white"}}/></a></div>
        <div className='navbar__item'><a href="#"><BsPower style={{color: "white"}}/></a></div>       
    </header>

</div>
)}

export default Navbar;