import React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
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
          <Route path='/checkoutFinalized' component={checkoutFinalized} />
        </Switch>
      </div>
    );
  }
}

export default App;
