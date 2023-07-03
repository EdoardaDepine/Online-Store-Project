import React from "react";
import { Component } from "react";
import { ClipLoader } from "react-spinners";
import "../style/loading.css";

class Loading extends Component {
  render() {
    return (
      <div className='containerLoading'>
        <div>
          <ClipLoader />
        </div>
      </div>
    );
  }
}

export default Loading;
