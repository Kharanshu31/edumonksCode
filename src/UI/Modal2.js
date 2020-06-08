import React,{Component} from "react";
import "./Modal.css"

class Modal2 extends Component{

  render(){
  return (
    <div
    className="modalcomponent"
    style={{
      display: this.props.show ? "block" : "none",
      transform: this.props.show ? "none" : "translate(-50%,-50%)"
    }}>
      <p className="modalpara">11th</p>
      <p className="modalpara">12th</p>
    </div>
    )
  }
}

export default Modal2;
