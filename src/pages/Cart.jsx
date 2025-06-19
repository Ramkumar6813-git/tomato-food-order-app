import { useContext } from "react";
import StoreContext from "./../context/storeContext";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } =
    useContext(StoreContext);
    const navigate = useNavigate()

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 25;
  const totalPrice = subtotal + deliveryFee;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <button
        className="absolute top-6 left-7 cursor-pointer hover:text-orange-600 flex items-center gap-1"
        onClick={() => navigate("/")}
        aria-label="Back to home"
      >
        <IoArrowBackCircleOutline className="size-9" />
        <span>Back to home</span>
      </button>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-gray-100 hidden sm:table-header-group">
                    <tr>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Item
                      </th>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Title
                      </th>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Price
                      </th>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Quantity
                      </th>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Total
                      </th>
                      <th className="p-3 sm:p-4 font-semibold text-gray-600">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b-1  flex flex-col items-start sm:table-row p-3 sm:p-0"
                      >
                        <td className="p-3 sm:p-4 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-3">
                            Item {item._id}
                          </span>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded mr-3 sm:mr-0"
                          />
                        </td>
                        <td className="p-3 sm:p-4 text-gray-800 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-2">
                            Title:
                          </span>
                          {item.name}
                        </td>
                        <td className="p-3 sm:p-4 text-gray-800 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-2">
                            Price:
                          </span>
                          Rs. {item.price}
                        </td>
                        <td className="p-3 sm:p-4 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-2">
                            Quantity:
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => decreaseQuantity(item._id)}
                              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                            >
                              -
                            </button>
                            <span className="text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 sm:p-4 text-gray-800 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-2">
                            Total:
                          </span>
                          Rs. {item.price * item.quantity}
                        </td>
                        <td className="p-3 sm:p-4 flex items-center sm:table-cell">
                          <span className="sm:hidden font-semibold mr-2">
                            Remove:
                          </span>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                            aria-label={`Remove ${item.name}`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-20">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  Cart Totals
                </h2>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-800">
                    <span>Total</span>
                    <span>Rs. {totalPrice}</span>
                  </div>
                </div>
                <button
                  className="mt-4 sm:mt-6 w-full bg-orange-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-orange-700 transition disabled:bg-gray-400 text-sm sm:text-base cursor-pointer"
                  disabled={cartItems.length === 0}
                  onClick={() => navigate("/order")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 sm:py-16">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Add something delicious from the menu to get started!
            </p>
            <Link
              to="/"
              className="mt-4 inline-block bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-700 transition text-sm sm:text-base"
            >
              Browse Menu
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
