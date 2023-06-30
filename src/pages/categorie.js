import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getCategorieId } from "../services/api";
import Product from "../components/product.js";
import Loading from "../components/loading";

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
        <div>
          {products.results.map((product) => (
            <div className='cardProduct' key={product.id}>
              <Product
                srcImage={product.thumbnail}
                title={product.title}
                price={product.price}
                product={product}
              />
              <Link to={`/product/${product.id}`}>+ detalhes</Link>
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
      <div>
        <button onClick={this.onCLickButtonCart}>Carrinho de Compras</button>
        <button onClick={this.onCLickButtonHome}>Home</button>
        <h1>Produtos:</h1>
        <div>{this.productsListCategorie()}</div>
      </div>
    );
  }
}

export default withRouter(Categorie);
