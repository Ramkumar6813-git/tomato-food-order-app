import React, { useContext, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import StoreContext from "../context/StoreContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 25;
  const total = subtotal + deliveryFee;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode || !/^\d{6}$/.test(formData.zipCode))
      newErrors.zipCode = "Valid 6-digit ZIP code is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Valid 10-digit mobile number is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Proceed with order submission (e.g., API call)
      console.log("Order submitted:", formData);
      // navigate("/order-confirmation"); // Redirect to confirmation page
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="flex items-center mb-6">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition cursor-pointer"
            onClick={() => navigate("/cart")}
            aria-label="Back to cart"
          >
            <IoArrowBackCircleOutline className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="text-sm sm:text-base">Back to Cart</span>
          </button>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Place Your Order
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Delivery Information Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Delivery Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code (6 digits)"
                  pattern="\d{6}"
                  maxLength="6"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number (10 digits)"
                  pattern="\d{10}"
                  maxLength="10"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition disabled:bg-gray-400 mt-4"
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-20">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Order Summary
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
                  <span>Rs. {total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
