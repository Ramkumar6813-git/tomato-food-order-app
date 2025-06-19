import "../App.css";
import { assets } from './../assets/frontend_assets/assets';

const Header = () => {
  return (
    <div
      className="relative w-full h-[30vh] md:h-[52vh] rounded-lg bg-no-repeat bg-cover bg-center my-2"
      style={{
        backgroundImage: `url(${assets.header_img})`,
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col bg-black/15 justify-center items-start px-6 md:px-12 lg:px-20 space-y-3 md:space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 leading-snug">
          Order your favourite food here.
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-gray-200 max-w-xl leading-relaxed">
          Choose a diverse menu featuring a delectable array of dishes crafted
          with the finest ingredients and culinary expertise.
        </p>
        <button
          type="button"
          className="bg-gray-100 text-gray-900 py-2 px-5 rounded-full shadow-md transition duration-300"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
