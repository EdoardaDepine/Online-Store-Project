import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getCategories, getProductsFromQuery } from "../services/api";
import Product from "../components/product";
import Loading from "../components/loading";

class Home extends Component {
  state = {
    inputSearch: "",
    categories: [],
    products: null,
    isLoading: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onClickButtonSearch = async () => {
    this.setState({ isLoading: true });
    const productsAPI = await getProductsFromQuery(`${this.state.inputSearch}`);
    this.setState({ products: productsAPI });
    this.setState({ isLoading: false });
    this.setState({ inputSearch: "" });
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className='containerSearch'>
        <div className='containerCategories'>
          Categorias
          <div className='categories'>
            {this.state.categories.map((categorie) => (
              <button
                key={categorie.id}
                value={categorie.id}
                onClick={this.onClickButtonCategorie}
              >
                {categorie.name}
              </button>
            ))}
          </div>
        </div>
        <label>
          <input
            name='inputSearch'
            type='text'
            onChange={this.handleChange}
            value={this.state.inputSearch}
          />
        </label>
        <button onClick={this.onClickButtonSearch}>Buscar</button>
        <button className='goToCart' onClick={this.onCLickButtonCart}>
          Carrinho de Compras
        </button>
        <div className='resultsSearch'>{this.productsList()} </div>
      </div>
    );
  }
}

export default withRouter(Home);
