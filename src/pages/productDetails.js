import React from "react";
import { getProductsDetails } from "../services/api";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {
  addProductInCart,
  readCartProducts,
} from "../services/cartLocalStorage";
import EvaluationForm from "../components/evaluationForm";
import Loading from "../components/loading";
import Quantity from "../components/quantity";
import "../style/productDetails.css";

class ProductDetails extends React.Component {
  state = {
    productDetails: "",
    isLoading: true,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const {
      match: {
        params: { productId },
      },
    } = this.props;
    const productDetailsAPI = await getProductsDetails(productId);
    this.setState({ productDetails: productDetailsAPI });
    this.setState({ isLoading: false });
  };

  addProduct = () => {
    const { productDetails } = this.state;
    const cartProducts = readCartProducts();
    const result = cartProducts.find((p) => p.id === productDetails.id);
    if (!result) addProductInCart(productDetails);
  };

  onCLickButtonHome = () => {
    this.props.history.push("/");
  };

  onCLickButtonCart = () => {
    this.props.history.push("/cart");
  };

  render() {
    const { productDetails, isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className='containerDetails'>
        <div className='header'>
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
        <div className='containerCardProductDetails'>
          <div className='cardProductDetails'>
            <h1 className='titleDetails'>Detalhes do produto:</h1>
            <p className='title'>{productDetails.title}</p>
            <p className='valueOriginal'>
              Valor original: R${productDetails.original_price}
            </p>
            <p className='valueActual'>Valor atual: R${productDetails.price}</p>
            <img
              alt='imagem do produto'
              src={productDetails.thumbnail}
              className='imgProductDetail'
            ></img>
            <p className='condition'>Condição: {productDetails.condition}</p>
            <p className='garanty'>
              Possui garantia? {productDetails.warranty}
            </p>
            <Quantity id={productDetails.id} intireProduct={productDetails} />
            <button
              onClick={this.addProduct}
              className='btn btn-outline-primary'
            >
              Adicionar ao carrinho de compras
            </button>
          </div>
        </div>
        <EvaluationForm />
      </div>
    );
  }
}

export default withRouter(ProductDetails);
