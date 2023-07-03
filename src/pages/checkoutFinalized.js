import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "../style/checkoutFinalized.css";

class CheckoutFinalized extends Component {
  onCLickButtonHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className='container'>
        <h2>Compra finalizada com sucesso!</h2>
        <button onClick={this.onCLickButtonHome} className='btn btn-success'>
          Voltar à página principal
        </button>
      </div>
    );
  }
}

export default withRouter(CheckoutFinalized);
