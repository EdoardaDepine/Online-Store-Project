import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/loading";
import { getProductsCart } from "../services/cartLocalStorage";
import Quantity from "../components/quantity";
import "../style/cart.css";

class Cart extends Component {
  state = {
    productsCartList: "",
    isLoading: false,
  };

  componentDidMount = () => {
    const productsCartListAPI = getProductsCart();
    this.setState({ productsCartList: productsCartListAPI });
  };

  onClickButtonGoBackHome = () => {
    this.props.history.push("/");
  };

  onClickButtonCheckoutProducts = () => {
    this.props.history.push("/checkout");
  };

  exibitionProducts = () => {
    const { productsCartList } = this.state;
    if (productsCartList.length === 0)
      return <p>Seu carrinho de compras está vazio!</p>;
    return (
      <div className='containerCardsProduct'>
        {productsCartList.map((product) => (
          <div key={product.id} className='cardProduct'>
            <p>{product.title}</p>
            <p>Preço: R${product.price}</p>
            <img src={product.thumbnail} alt='imagem do produto' />
            <Quantity
              id={product.id}
              intireProduct={product}
              totalValueItensCart={this.totalValueItensCart}
            />
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
      <div className='cart'>
        <div className='headerContainer'>
          <p className='titleCart'>Carrinho de Compras</p>
          <button
            onClick={this.onClickButtonGoBackHome}
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

        <div>{this.exibitionProducts()}</div>
        <button
          onClick={this.onClickButtonCheckoutProducts}
          className='btn btn-warning'
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default withRouter(Cart);
