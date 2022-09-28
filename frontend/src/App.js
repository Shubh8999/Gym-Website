import React from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx"
import Search from "./component/Product/Search.jsx"


function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;