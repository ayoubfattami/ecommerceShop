import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product, onAddToCart } = this.props;

    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
        <div className="h-64">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 font-bold mt-2">{product.price} €</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
