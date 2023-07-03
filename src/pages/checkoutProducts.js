import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getProductsCart } from "../services/cartLocalStorage";
import Loading from "../components/loading";
import InformationClientForm from "../components/informationsClientForm";
import "../style/checkoutProducts.css";

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
      <div className='containerCardsProduct'>
        {cartItens.map((product) => (
          <div key={product.id} className='cardProduct'>
            <p>{product.title}</p>
            <p>Preço: R${product.price}</p>
            <p>Quantidade: {product.quantity}</p>
            <img src={product.thumbnail} alt='imagem do produto' />
          </div>
        ))}
      </div>
    );
  };

  onCLickButtonHome = () => {
    this.props.history.push("/");
  };

  onCLickButtonCheckoutFinalized = () => {
    this.props.history.push("/checkoutFinalized");
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <div className='headerContainer'>
          <button
            onClick={this.onCLickButtonHome}
            className='btn btn-secondary btnHome'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-house'
              viewBox='0 0 16 16'
            >
              <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
            </svg>
            <p>Home</p>
          </button>
        </div>
        <div className='containerCheckout'>
          <p className='revisionProductsTitle'>Revise seus Produtos:</p>
          <div>{this.exibitionProductsCart()}</div>
          <p className='totalValueItens'>
            Valor total do itens: R${this.state.totalValueItens}
          </p>
          <InformationClientForm />
          <button onClick={this.onCLickButtonCheckoutFinalized}>Comprar</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutProducts);
