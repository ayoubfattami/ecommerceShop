import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...prevState.cartItems, { ...product, quantity: 1 }],
        };
      }
    });
  };

  render() {
    const { cartItems } = this.state;

    return (
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<ProductList onAddToCart={this.handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
