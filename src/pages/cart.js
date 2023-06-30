import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/loading";
import { getProductsCart } from "../services/cartLocalStorage";
import Quantity from "../components/quantity";

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
      <div>
        {productsCartList.map((product) => (
          <div key={product.id}>
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
      <div>
        <p>Carrinho de Compras</p>
        <button onClick={this.onClickButtonGoBackHome}>Home</button>
        <div>{this.exibitionProducts()}</div>
        <button className='goBackHome' onClick={this.onClickButtonGoBackHome}>
          Voltar
        </button>
        <button onClick={this.onClickButtonCheckoutProducts}>
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default withRouter(Cart);
