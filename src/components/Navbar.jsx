import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../context/storeContext";

const Navbar = ({ setShowForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(StoreContext);

  let cartItemsLength = cartItems.length

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    // { label: "Mobile App", href: "#mobile-app" },
    { label: "Contact", href: "#contact" },
  ];

  const handleFormNavLinks = () => {
    setShowForm(true);
    setIsOpen(false)
  }

  return (
    <nav className="shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              Tomato
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-200 text-base transition duration-300"
              >
                {link.label}
              </a>
            ))}
            {/* Right-side Icons & Sign-in */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                type="button"
                className="hover:text-yellow-300 transition"
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0-5.65A7 7 0 1 0 5.65 5.65a7 7 0 0 0 10.7 0 7 7 0 0 0 0-10.7z"
                  />
                </svg>
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative hover:text-yellow-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemsLength}
                </span>
              </Link>

              {/* Sign In */}
              <button
                type="button"
                onClick={handleFormNavLinks}
                className="bg-yellow-300 text-gray-900 px-4 py-1 rounded-full text-sm font-medium hover:bg-yellow-200 transition duration-300"
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-500 ease-in-out bg-orange-500 rounded-b-xl`}
        >
          <div className="px-4 pt-2 pb-4 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block hover:text-yellow-300 text-base font-medium py-2 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Icons & Sign-in */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="button"
                className="hover:text-yellow-300 transition"
                aria-label="Search"
              >
                Search
              </button>

              <Link
                to="/cart"
                className="relative hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemsLength}
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={handleFormNavLinks}
              className="mt-4 w-full bg-yellow-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-200 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
