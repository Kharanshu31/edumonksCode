import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Learnings from "../../components/Learnings/Learnings";

class Login extends Component{
  render(){
    return (
      <div>
        <Navbar />
          <div style={{display: "flex"}}>
            <Sidebar />
            <Learnings />
          </div>
      </div>
    )
  }
}

export default withRouter(Login);
