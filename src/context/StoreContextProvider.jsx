import { useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import StoreContext from './StoreContext';

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    const exists = cartItems.find((item) => item._id === foodItem._id);
    if (exists) {
      increaseQuantity(foodItem._id);
    } else {
      setCartItems([...cartItems, { ...foodItem, quantity: 1 }]);
    } 
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const storeValue = {
    foodList: food_list,
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
