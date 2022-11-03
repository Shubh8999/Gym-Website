import React, { useState } from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.jsx";
import Footer from "./component/layout/Footer/Footer.jsx";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
// import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products"
import Search from "./component/Product/Search"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile"
import UpdatePassword from "./component/User/UpdatePassword"
import ForgotPassword from "./component/User/ForgotPassword"
import ResetPassword from "./component/User/ResetPassword"
import Cart from "./component/Cart/Cart"
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx"
import axios from "axios";
import Payment from "./component/Cart/Payment.jsx"
import OrderSuccess from "./component/Cart/OrderSuccess.jsx"
import MyOrders from "./component/Order/MyOrders.jsx"
import OrderDetails from "./component/Order/OrderDetails.jsx"
import Contact from "./component/layout/Contact/Contact.jsx";
import About from "./component/layout/About/About.jsx";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      },
    });

    store.dispatch(loadUser());

  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/account" element={isAuthenticated ? <Profile /> : <LoginSignUp />} />
        <Route exact path="/me/update" element={isAuthenticated ? <UpdateProfile /> : <LoginSignUp />} />
        <Route exact path="/password/update" element={<UpdatePassword />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/order/confirm" element={isAuthenticated ? <ConfirmOrder /> : <LoginSignUp />} />
        <Route exact path="/process/payment" element={isAuthenticated ? <Payment /> : <LoginSignUp />} />
        <Route exact path="/success" element={isAuthenticated ? <OrderSuccess /> : <LoginSignUp />} />
        <Route exact path="/orders" element={isAuthenticated ? <MyOrders /> : <LoginSignUp />} />
        <Route exact path="/order/:id" element={isAuthenticated ? <OrderDetails /> : <LoginSignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;