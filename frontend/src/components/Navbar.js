import React from 'react'
import "./Navbar.css";
import { BsFillHouseFill, BsImages, BsBarChartLineFill, BsFillPersonFill, BsFillQuestionCircleFill, BsPower } from "react-icons/bs";

const Navbar = () => {
return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Yearbook, 2022</div>
        <div className='navbar__item'><a href="#"><BsFillHouseFill/></a></div>
        <div className='navbar__item'><a href="#"><BsImages/></a></div>
        <div className='navbar__item'><a href="#"><BsBarChartLineFill/></a></div> 
        <div className='navbar__item'><a href="#"><BsFillPersonFill/></a></div>
        <div className='navbar__item'><a href="#"><BsFillQuestionCircleFill/></a></div>
        <div className='navbar__item'><a href="#"><BsPower/></a></div>       
    </header>
)}

export default Navbar;