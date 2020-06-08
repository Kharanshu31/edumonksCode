import React,{Component} from "react";
import "./Modal.css";
import Modal2 from "./Modal2"

class Modal1 extends Component{

  state={
    second:false
  }

  showsecond=()=>{
    this.setState({second:true})
  }

  render(){
  return (
    <div>
    <div
    className="modalcomponent"
    style={{
      display: this.props.show ? "block" : "none",
      transform: this.props.show ? "none" : "translate(-50%,-50%)"
    }}>
      <p className="modalpara" onClick={this.showsecond}>11th</p>
      <p className="modalpara">12th</p>
    </div>

    </div>
    )
  }
}

export default Modal1;
