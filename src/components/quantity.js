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
