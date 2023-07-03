import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getCategories, getProductsFromQuery } from "../services/api";
import Product from "../components/product";
import Loading from "../components/loading";
import "../style/home.css";

class Home extends Component {
  state = {
    inputSearch: "",
    categories: [],
    products: null,
    isLoading: false,
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    const categoriesAPI = await getCategories();
    this.setState({ categories: categoriesAPI });
    this.setState({ isLoading: false });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onCLickButtonCart = () => {
    this.props.history.push("/cart");
  };

  onClickButtonSearch = async () => {
    this.setState({ isLoading: true });
    const productsAPI = await getProductsFromQuery(`${this.state.inputSearch}`);
    this.setState({ products: productsAPI });
    this.setState({ isLoading: false });
    this.setState({ inputSearch: "" });
  };

  onClickButtonCategorie = ({ target }) => {
    const categorie = this.state.categories.find(
      (categorie) => categorie.id === target.value
    );
    const idCategorie = categorie.id;
    this.props.history.push(`/categorie/${idCategorie}`);
  };

  productsList = () => {
    const products = this.state.products;

    if (products === null)
      return <p>Digite algum termo de pesquisa ou escolha uma categoria!</p>;

    if (products.length === 0) return <p>Nenhum produto foi encontrado!</p>;
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

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className='containerPage'>
        <div className='categories'>
          <button
            className='btn btn-primary btnCartInHome'
            onClick={this.onCLickButtonCart}
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

          <h2>CATEGORIAS</h2>
          {this.state.categories.map((categorie) => (
            <button
              key={categorie.id}
              value={categorie.id}
              onClick={this.onClickButtonCategorie}
              className='btn btn-warning'
            >
              {categorie.name}
            </button>
          ))}
        </div>
        <div className='containerSearch'>
          <div className='containerInput'>
            <label>
              <input
                name='inputSearch'
                type='text'
                onChange={this.handleChange}
                value={this.state.inputSearch}
                className='form-control'
              />
            </label>
            <button
              onClick={this.onClickButtonSearch}
              className='btn btn-secondary'
            >
              Buscar
            </button>
          </div>
          <div className='resultsSearch'>{this.productsList()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
