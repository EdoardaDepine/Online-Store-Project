import React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/home.js";
import Cart from "./pages/cart";
import Categorie from "./pages/categorie.js";
import ProductDetails from "./pages/productDetails.js";
import CheckoutProducts from "./pages/checkoutProducts.js";
import CheckoutFinalized from "./pages/checkoutFinalized.js";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route
            path='/categorie/:id'
            render={(propsRouter) => <Categorie {...propsRouter} />}
          />
          <Route
            exact
            path='/product/:productId'
            render={(propsRouter) => <ProductDetails {...propsRouter} />}
          />
          <Route path='/checkout' component={CheckoutProducts} />
          <Route path='/checkoutFinalized' component={CheckoutFinalized} />
        </Switch>
      </div>
    );
  }
}

export default App;
