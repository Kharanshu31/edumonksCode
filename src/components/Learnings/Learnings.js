import React, { Component } from 'react';
import "./Learnings.css";

class Learnings extends Component {
  render(){
    return (
      <div>

        <div className="learningbody" style={{backgroundColor: "#3CB371",paddingRight: "300px"}}>

          <div style={{display: "flex"}}>

          <div className="learningsubset">
            <p className="learninginfo">All interactive Session</p>
          </div>

          <div className="learningsubset">
            <p className="learninginfo">All interactive Session</p>
          </div>

          </div>

          <div style={{display: "flex"}}>

          <div className="learningsubset">
            <p className="learninginfo">All interactive Session</p>
          </div>

          <div className="learningsubset">
            <p className="learninginfo">All interactive Session</p>
          </div>

          </div>

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
    )
  }
}

export default Learnings;
