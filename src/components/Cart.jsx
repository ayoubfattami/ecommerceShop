import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>{item.price * item.quantity} €</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4 flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold text-blue-600">
                {totalPrice} €
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
