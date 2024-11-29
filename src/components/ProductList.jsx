import { Component } from "react";
import Product from "./Product";
import products from "../assets/Products";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPriceRange: "all",
      selectedSystem: "all",
    };
  }

  handlePriceFilterChange = (event) => {
    this.setState({ selectedPriceRange: event.target.value });
  };

  handleSystemFilterChange = (event) => {
    this.setState({ selectedSystem: event.target.value });
  };

  filterProducts = (products) => {
    const { selectedPriceRange, selectedSystem } = this.state;

    let filteredProducts = products;
    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (selectedSystem !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.systeme.toLowerCase() === selectedSystem.toLowerCase()
      );
    }

    return filteredProducts;
  };

  render() {
    const { onAddToCart } = this.props;

    const filteredProducts = this.filterProducts(products);

    return (
      <div className="container mx-auto p-4">
        <div className="mb-4 flex gap-4">
          <div>
            <label htmlFor="priceFilter" className="mr-2 font-semibold">
              Filtrer par prix :
            </label>
            <select
              className="bg-[#eee] p-2"
              id="priceFilter"
              value={this.state.selectedPriceRange}
              onChange={this.handlePriceFilterChange}
            >
              <option value="all">Tous les prix</option>
              <option value="0-1500">0 - 1500</option>
              <option value="1501-2000">1501 - 2000</option>
              <option value="2001-3000">2001 - 3000</option>
              <option value="3001-15000">3001 et plus</option>
            </select>
          </div>
          <div>
            <label htmlFor="systemFilter" className="mr-2 font-semibold">
              Filtrer par système :
            </label>
            <select
              className="bg-[#eee] p-2"
              id="systemFilter"
              value={this.state.selectedSystem}
              onChange={this.handleSystemFilterChange}
            >
              <option value="all">Tous les systèmes</option>
              <option value="android">Android</option>
              <option value="iphone">iPhone</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
