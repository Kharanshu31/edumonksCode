import React,{Component} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Modal1 from "../../UI/Modal1";
import Modal2 from "../../UI/Modal2";

class Session extends Component{

  state={
    first:false
  }

  showfirst=()=>{
    this.setState({first:true})
  }

  modalclosed=()=>{
    this.setState({first:false})
  }

  render(){
  return (
    <div>
    <Navbar />

      <Modal1 show={this.state.first} />

      <button style={{position: 'relative',bottom: "78px",left: "40%",padding: "7px"}} onClick={this.showfirst}>Select Class</button>

      <div style={{display: "flex"}} onClick={this.modalclosed}>
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
}

export default Session;
