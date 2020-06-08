import React, { Component } from 'react';
import "./SignUp.css";

class SignUp extends Component {
  render(){
    return (
      <div className="studying">
        <div className="signupbox">

          <h3 className="signupheading">Sign Up</h3>

          <p className="signupinputname">Name</p>
          <input className="signupinputbox"></input>

          <p className="signupinputname">Name</p>
          <input className="signupinputbox"></input>

          <p className="signupinputname">Name</p>
          <input className="signupinputbox"></input>

          <p className="signupinputname">Name</p>
          <input className="signupinputbox"></input>

          <div>
          <button className="signupbtn"><span className="btnwritten">Sign Up</span></button>
          </div>

        </div>
      </div>
    )
  }
}

export default SignUp;
