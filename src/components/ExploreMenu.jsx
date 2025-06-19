import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="my-6 px-4" id="menu">
      <h1 className="text-2xl font-bold pb-3 text-gray-800">Explore Menu</h1>
      <p className="text-gray-600 mb-4 max-w-3xl">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 py-2 px-1">
          {menu_list.map((menuItem) => (
            <li
              onClick={() => setCategory(category === menuItem.menu_name ? "All" : menuItem.menu_name)}
              key={menuItem.menu_name}
              className="inline-block text-center min-w-[6rem] cursor-pointer"
            >
              <img
                src={menuItem.menu_image}
                alt={menuItem.menu_name}
                className={`${
                  category === menuItem.menu_name &&
                  "ring-2 ring-orange-600 border"
                }size-20 md:size-23 mx-auto rounded-full shadow-md`}
              />
              <h3 className="mt-2 text-sm font-medium text-gray-800">
                {menuItem.menu_name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-5 text-shadow-lg text-gray-300 border-1" />
    </div>
  );
};

export default ExploreMenu;
