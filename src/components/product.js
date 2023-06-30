import React from "react";
import { Component } from "react";
import {
  addProductInCart,
  readCartProducts,
} from "../services/cartLocalStorage";

class Product extends Component {
  render() {
    const { srcImage, title, price } = this.props;
    return (
      <div>
        <img alt='imagem do produto' src={srcImage} />
        <p>{title}</p>
        <p>Valor: R${price}</p>
        <button onClick={this.addProduct}>
          Adicionar ao carrinho de compras
        </button>
      </div>
    );
  }
}

export default Product;
