import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getProductsCart } from "../services/cartLocalStorage";
import Loading from "../components/loading";
import InformationClientForm from "../components/informationsClientForm";

class CheckoutProducts extends Component {
  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <button onClick={this.onCLickButtonHome}>Home</button>
        <p>Finalizar Compra:</p>
        <div>
          <p>Revise seus Produtos:</p>
          <div>{this.exibitionProductsCart()}</div>
        </div>
        <p>Valor total do itens: R${this.state.totalValueItens}</p>
        <div>
          <InformationClientForm />
        </div>
        <button onClick={this.onCLickButtonCheckoutFinalized}>Comprar</button>
      </div>
    );
  }
}

export default withRouter(CheckoutProducts);
