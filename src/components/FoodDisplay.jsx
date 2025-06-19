import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
const { foodList } = useContext(StoreContext);
  return (
    <div className="my-2 px-4">
      <h1 className="text-2xl font-bold pb-2 text-gray-800">
        Top Dishes Near You
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {foodList.map((foodItem) => {
            if (category === "All" || category === foodItem.category){
                return <FoodItem key={foodItem._id} foodDetails={foodItem} />
            }
          })}
      </div>
    </div>
  );
}

export default FoodDisplay