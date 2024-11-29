import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { cartItems } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <header className="bg-green-600 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center md:px-10">
          <h1 className="text-white text-2xl font-bold ">
            <Link to="/">
              <p className="flex gap-2">
                <span>FattamiPhone</span>
                
              </p>
            </Link>
          </h1>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-green-300 transition">
              Home
            </Link>
            <Link
              to="/cart"
              className="relative text-white hover:text-green-300 transition"
            >
              Cart
            </Link>
            <div className="relative text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span className="absolute -bottom-4 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItems?.length}
              </span>
            </div>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={this.toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-green-600 text-white shadow-lg">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-green-700 transition"
                onClick={this.toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-2 hover:bg-green-700 transition relative"
                onClick={this.toggleMenu}
              >
                Cart
                <span className="absolute -top-0 left-11 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0  ">
                  {cartItems?.length}
                </span>
              </Link>
            </div>
          )}

          <Link to="/cart" className="md:hidden relative text-white ml-4">
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span className="absolute -bottom-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItems?.length}
              </span>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
