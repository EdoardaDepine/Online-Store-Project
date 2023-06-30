import React from "react";
import { Component } from "react";
import {
  addProductInCart,
  readCartProducts,
} from "../services/cartLocalStorage";
import "../style/product.css";

class Product extends Component {
  addProduct = () => {
    const { product } = this.props;
    const cartProducts = readCartProducts();
    const result = cartProducts.find((p) => p.id === product.id);
    if (!result) addProductInCart(product);
  };

  render() {
    const { srcImage, title, price } = this.props;
    return (
      <div>
        <img alt='imagem do produto' src={srcImage} />
        <p className='title'>{title}</p>
        <p>Valor: R${price}</p>
        <button onClick={this.addProduct}>
          Adicionar ao carrinho de compras
        </button>
      </div>
    );
  }
}

export default Product;
