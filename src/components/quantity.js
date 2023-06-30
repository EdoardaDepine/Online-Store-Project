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
