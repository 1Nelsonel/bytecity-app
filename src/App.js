import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container } from 'react-bootstrap';

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ServicePage from "./Pages/ServicePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />        
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services/" element={<ProductPage />} />
          <Route path="/About/" element={<AboutPage/>}/>
          <Route path="/Contact/" element={<ContactPage/>}/>
          <Route path="/Service/" element={<ServicePage/>}/>
          </Routes>               
        <Footer />
      </Router>
    </div>
  );
}

export default App;
