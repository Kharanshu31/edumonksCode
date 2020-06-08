import React from "react";
import "./Navbar.css";

const Navbar = () =>{
  return (
    <div className="navbarbody">
      <h5 className="navbarheading">Welcome To Edunomics</h5>
      <div className="navbarbtndiv">
        <button className="navbarbtn">My Account</button>
      </div>
    </div>
  )
}

export default Navbar;
