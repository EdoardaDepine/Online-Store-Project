import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getCategorieId } from "../services/api";
import Product from "../components/product.js";
import Loading from "../components/loading";
import "../style/categorie.css";

class Categorie extends Component {
  state = {
    products: null,
    categories: [],
    isLoading: false,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const categorieProducts = await getCategorieId(id);
    this.setState({ products: categorieProducts });
    this.setState({ isLoading: false });
  };

  productsListCategorie = () => {
    const products = this.state.products;
    if (products != null)
      return (
        <div className='productsList'>
          {products.results.map((product) => (
            <div key={product.id}>
              <Product
                srcImage={product.thumbnail}
                title={product.title}
                price={product.price}
                product={product}
                id={product.id}
              />
            </div>
          ))}
        </div>
      );
  };

  onCLickButtonHome = () => {
    this.props.history.push("/");
  };

  onCLickButtonCart = () => {
    this.props.history.push("/cart");
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className='containerCategorie'>
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
          <button
            onClick={this.onCLickButtonCart}
            className='btn btn-light btnCart'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-cart4'
              viewBox='0 0 16 16'
            >
              <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
            </svg>
            <p>Carrinho de Compras</p>
          </button>
        </div>
        <h1 className='title'>Produtos:</h1>
        <div>{this.productsListCategorie()}</div>
      </div>
    );
  }
}

export default withRouter(Categorie);
