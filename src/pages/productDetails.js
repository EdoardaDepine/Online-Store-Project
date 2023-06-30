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

class ProductDetails extends React.Component {
  state = {
    productDetails: "",
    isLoading: true,
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
      <div>
        <button onClick={this.onCLickButtonHome}>Home</button>
        <div className='cardProductDetail'>
          <h1>Detalhes do produto:</h1>
          <p>{productDetails.title}</p>
          <p>Valor original: R${productDetails.original_price}</p>
          <p>Valor atual: R${productDetails.price}</p>
          <img alt='imagem do produto' src={productDetails.thumbnail}></img>
          <p>Condição: {productDetails.condition}</p>
          <p>Possui garantia? {productDetails.warranty}</p>
          <Quantity id={productDetails.id} intireProduct={productDetails} />
          <button onClick={this.addProduct}>
            Adicionar ao carrinho de compras
          </button>
        </div>
        <button onClick={this.onCLickButtonCart}>Carrinho de Compras</button>
        <EvaluationForm />
      </div>
    );
  }
}

export default withRouter(ProductDetails);
