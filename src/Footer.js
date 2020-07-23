import React, { Component } from "react";
import plus from "./plus.svg";
class Footer extends Component {
  render() {
    return (
      <div className="footer container-fluid">
        <div className="icon-container">
          {/* <i className="fa fa-plus-circle add"></i> */}
          <img
            src={plus}
            alt="add"
            className="add"
            onClick={() => window.location="/add"}
            // onClick={() => this.props.history.push("/add")}
            ></img>
        </div>
        <div className="dummy container-fluid"></div>
      </div>
    );
  }
}

export default Footer;
