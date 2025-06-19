import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import Footer from '../components/Footer';
import { FaArrowUp } from 'react-icons/fa'; 

const Home = ({ setShowForm }) => {
  const [category, setCategory] = useState("All");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col" id="home">
      {/* Scroll-to-Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-10 md:bottom-20 right-10 md:right-20 border p-3 rounded-full z-50 bg-white shadow hover:bg-gray-100 transition-colors duration-200 animate-bounce cursor-pointer
        "
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>

      <Navbar setShowForm={setShowForm} />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Footer />
    </div>
  );
};

export default Home;