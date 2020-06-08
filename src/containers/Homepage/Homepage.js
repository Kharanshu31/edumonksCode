import React, { Component } from 'react';
import {NavLink,Redirect,withRouter} from "react-router-dom";
import "./Homepage.css"

class Homepage extends Component {
  render(){
    return (
        <div className="home">
          <p className="companyname">Welcome to Edunomics</p>
          <nav className="loginbtnbody">
            <NavLink to="/login" className="loginlinks">Login</NavLink>
            <NavLink to="/signup" className="loginlinks">Signup</NavLink>
          </nav>

            <div className="centrepage">

              <h1 className="centreheading">WHERE DO YOU WANT TO GO TODAY?</h1>
              <p className="centrepara">Share your ultimate Travel bucket List with us</p>

            <div className="userdata">
              <p style={{color: "white"}}>Email</p>
              <input></input>

              <p style={{color: "white"}}>Password</p>
              <input></input>

              <div className="userbtn">
              <button style={{marginTop: "20px"}} onClick={()=><Redirect to="/login"/>}>Log in</button>
              </div>

            </div>

          </div>

        </div>
    )
  }
}

export default withRouter(Homepage);
