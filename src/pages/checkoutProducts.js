import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getProductsCart } from "../services/cartLocalStorage";
import Loading from "../components/loading";
import InformationClientForm from "../components/informationsClientForm";

class CheckoutProducts extends Component {
  state = {
    cartItens: [],
    isLoading: false,
    totalValueItens: "",
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    const cartItensLocalStorage = getProductsCart();
    this.setState({ cartItens: cartItensLocalStorage });
    this.setState({ isLoading: false });
    this.setState({ totalValueItens: this.totalValueItensCart() });
  };

  totalValueItensCart = () => {
    const productsCartListAPI = getProductsCart();
    const allValuesItensList = productsCartListAPI.map((p) => {
      const quantity = p.quantity;
      const price = p.price;
      const multiplicationValueByQuantity = Number(quantity) * Number(price);
      return multiplicationValueByQuantity;
    });
    const sumAllProducts = allValuesItensList.reduce(function (total, price) {
      return total + price;
    }, 0);
    return Number(sumAllProducts);
  };

  exibitionProductsCart = () => {
    const { cartItens } = this.state;
    if (cartItens.length === 0)
      return <p>Seu carrinho de compras está vazio!</p>;
    return (
      <div>
        {cartItens.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>Preço: R${product.price}</p>
            <p>Quantidade: {product.quantity}</p>
            <img src={product.thumbnail} alt='imagem do produto' />
          </div>
        ))}
      </div>
    );
  };

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
