import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import './App.css'
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import { useState } from 'react';
import LoginSignupForm from './components/LoginPopup';

function App() {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="px-5">
      {showForm ? <LoginSignupForm setShowForm={setShowForm} /> : <></>}
      <Routes>
        <Route path="/" element={<Home setShowForm={setShowForm}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App
