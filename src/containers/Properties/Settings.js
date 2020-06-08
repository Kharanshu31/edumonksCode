import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () =>{
  return (
    <div>
    <Navbar />
      <div style={{display: "flex"}}>
        <Sidebar />

          <div>

          <div style={{backgroundColor: "#3CB371",padding: "300px",paddingRight: "960px"}}>

          </div>

        <div style={{display: "flex"}}>

          <div className="topics">
            <p className="topicpara">Topics Covered</p>
          </div>

          <div className="topics">
            <p className="topicpara">Recent Activities</p>
          </div>

        </div>


        <div className="performance">
          <p style={{marginLeft: "46%"}}>Performance</p>
        </div>

        </div>

      </div>

    </div>
  )
}

export default Settings;
