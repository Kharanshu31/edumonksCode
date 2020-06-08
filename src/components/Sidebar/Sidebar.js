import React from "react";
import "./Sidebar.css";
import {NavLink,withRouter} from "react-router-dom";

const Sidebar = () =>{
  return (
    <div className="sidebar">

      <nav className="navlinknav">
        <NavLink to="/home"><span className="navlinklogin">Home</span></NavLink>
      </nav>
      <nav className="navlinknav">
        <NavLink to="/session"><span className="navlinklogin">Session</span></NavLink>
      </nav>
      <nav className="navlinknav">
        <NavLink to="/downloads"><span className="navlinklogin">Download</span></NavLink>
      </nav>
      <nav className="navlinknav">
        <NavLink to="/settings"><span className="navlinklogin">Settings</span></NavLink>
      </nav>
      <nav className="navlinknav">
        <NavLink to="/about"><span className="navlinklogin">About</span></NavLink>
      </nav>

    </div>
  )
}

export default withRouter(Sidebar);
