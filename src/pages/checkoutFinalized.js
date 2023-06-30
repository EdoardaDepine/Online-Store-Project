import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class CheckoutFinalized extends Component {
  render() {
    return (
      <div>
        <h1>Compra finalizada com sucesso!</h1>
        <button onClick={this.onCLickButtonHome}>
          Voltar à página principal
        </button>
      </div>
    );
  }
}

export default withRouter(CheckoutFinalized);
