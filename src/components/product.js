import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
    const { srcImage, title, price, id } = this.props;
    return (
      <div className='productsList'>
        <div className='containerProduct'>
          <img className='imgProduct' alt='imagem do produto' src={srcImage} />
          <p className='titleProduct'>{title}</p>
          <p className='valueProduct'>Valor: R${price}</p>
          <button onClick={this.addProduct} className='btn btn-outline-primary'>
            Adicionar ao carrinho de compras
          </button>
          <button className='btn btn-warning'>
            <Link to={`/product/${id}`} className='linkMoreDetails'>
              + Detalhes
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
