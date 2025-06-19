import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopup = ({setShowForm}) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => setIsLoginForm(!isLoginForm);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLoginForm ? "Logging in with" : "Signing up with", formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/50  bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 mx-4">
        <div className="flex">
          <h2 className="text-2xl font-semibold mb-4 mx-auto">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <button
            className="float-end border-0 transform -translate-y-2 text-xl cursor-pointer"
            onClick={() => setShowForm(false)}
          >
            <img src={assets.cross_icon} alt="cross-icon"/>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          {!isLoginForm && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded hover:bg-blue-700 transition"
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" id="terms" className="accent-blue-600" />
          <label htmlFor="terms">I agree to the Terms & Privacy</label>
        </div>

        <p className="text-center mt-4 text-sm">
          {isLoginForm ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
