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
      return <p>Digite algum termo de pesquisa ou escolha uma categoria</p>;

    if (products.length === 0) return <p>Nenhum produto foi encontrado!</p>;
    return (
      <div>
        {products.results.map((product) => (
          <div key={product.id}>
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
