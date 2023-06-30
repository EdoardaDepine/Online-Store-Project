import React from "react";
import { Component } from "react";
import {
  addProductInCart,
  getProductsCart,
  removeProductById,
  saveProductInCart,
  readCartProducts,
} from "../services/cartLocalStorage";

class Quantity extends Component {
  state = {
    productsCartList: [],
    buttonDisabled: true,
    inputQuantity: 0,
    valueProductByQuantity: 0,
    product: {},
  };

  componentDidMount = () => {
    const productsCartListLocalStorage = getProductsCart();
    this.setState({ productsCartList: productsCartListLocalStorage });
    const { id } = this.props;

    if (productsCartListLocalStorage.length >= 1) {
      const productLocalStorage = productsCartListLocalStorage.find(
        (p) => p.id === id
      );
      if (productLocalStorage !== undefined) {
        this.setState({ inputQuantity: productLocalStorage.quantity });
        this.setState({ product: productLocalStorage });
        if (productLocalStorage.quantity >= 1) {
          this.setState({ buttonDisabled: false });
        }
      }
    }
  };

  alterationProductQuantity = (id, isAdd) => {
    const { intireProduct } = this.props;
    const cartProducts = readCartProducts();

    const addProduct = {
      title: intireProduct.title,
      price: intireProduct.price,
      thumbnail: intireProduct.thumbnail,
      id: intireProduct.id,
      quantity: 1,
    };

    if (cartProducts === undefined || cartProducts.length === 0) {
      return addProductInCart(addProduct);
    } else {
      const product = cartProducts.find((product) => product.id === id);

      if (product !== undefined) {
        removeProductById(product);
        const newProduct = {
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          id: product.id,
          quantity: isAdd ? (product.quantity += 1) : (product.quantity -= 1),
        };

        this.setState({ inputQuantity: newProduct.quantity });
        const getProducts = cartProducts.filter((p) => p !== product);
        saveProductInCart([...getProducts, newProduct]);
        if (newProduct.quantity <= 1) {
          this.setState({ buttonDisabled: true });
        }
      } else {
        addProductInCart(addProduct);
      }
    }
  };

  onClickButtonAddItem = (id) => {
    this.alterationProductQuantity(id, true);
    this.setState({ buttonDisabled: false });
  };

  onClickButtonRemoveItem = (id) => {
    this.alterationProductQuantity(id, false);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id } = this.props;
    return (
      <div>
        <label>
          <input
            onChange={this.handleChange}
            value={this.state.inputQuantity}
            type='number'
            name='itemQuantity'
          ></input>
          <button onClick={() => this.onClickButtonAddItem(id)}>+</button>
          <button
            disabled={this.state.buttonDisabled}
            onClick={() => this.onClickButtonRemoveItem(id)}
          >
            -
          </button>
        </label>
      </div>
    );
  }
}

export default Quantity;
