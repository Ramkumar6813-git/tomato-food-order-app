import { useContext } from "react";
import StoreContext from "../context/StoreContext";

const FoodItem = ({ foodDetails }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(StoreContext);

  const { _id, name, image, description, price, category } = foodDetails;
  const cartItem = cartItems.find((item) => item._id === _id);
  const count = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(foodDetails);
  };

  const handleDecreaseQuantity = () => {
    if (count === 1) {
      removeFromCart(_id);
    } else {
      decreaseQuantity(_id);
    }
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(_id);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-60 relative group">
      {/* Image with floating counter */}
      <div className="relative">
        <img src={image} alt={name} className="h-40 w-full object-cover" />
        {!count ? (
          <button
            className="absolute bottom-2 right-2 text-md bg-white text-black px-3 py-1 rounded-sm shadow-xl hover:bg-gray-200 transition duration-200"
            aria-label="Add item"
            onClick={handleAddToCart}
          >
            Add
          </button>
        ) : (
          <div className="absolute flex items-center gap-2 right-2 bottom-2 bg-white px-2 py-1 rounded-md shadow">
            <button
              type="button"
              className="text-2xl text-red-600 cursor-pointer"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="text-lg font-bold">{count}</span>
            <button
              type="button"
              className="text-2xl text-green-600 cursor-pointer"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="p-3">
        <div className="text-sm text-gray-600">{category}</div>
        <h3 className="text-md font-semibold text-gray-800 mt-1 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
        <div className="text-orange-600 text-lg font-semibold mt-2">
          ₹{price}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
