import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Contact" component={Contact} />
        <Route path="/book-demo" component={Booking} />
        </Routes>
    </Router>
  );
};

export default App;
