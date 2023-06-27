import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import SignupPage from './components/SignupPage';
const App = () => {
  return (
    <>
    {/* <Navbar /> */}
      <BrowserRouter>
        {/* <SignupPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/book-demo" element={<Booking />} />
          <Route path="/SignupPage" element={<SignupPage />} />
        </Routes>

      </BrowserRouter>
    </>

  );
};

export default App;
