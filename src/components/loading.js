import React from "react";
import { Component } from "react";
import { ClipLoader } from "react-spinners";

class Loading extends Component {
  render() {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }
}

export default Loading;
