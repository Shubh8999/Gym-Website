// import React, { Fragment, useEffect, useRef } from "react";
// import CheckoutSteps from "./CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/MetaData";
// import { Typography } from "@material-ui/core";
// import { useAlert } from "react-alert";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement,
//   useStripe,
//   useElements,
//   Elements
// } from "@stripe/react-stripe-js"
// import axios from "axios";
// import "./payment.css";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import EventIcon from "@material-ui/icons/Event";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import PaymentSec from "./PaymentSec";
import { Fragment, React, useRef, useState } from 'react'
// import "./SignUp.scss";
// import axios from 'axios';
// import FileBase64 from 'react-file-base64';
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from 'axios';
import "./payment.scss"
import { AiFillWarning } from "react-icons/ai"
// import CardItem from "./CardItem"
import {
  AiOutlineMail,
  AiOutlineUpload,
  AiFillPhone,
  AiFillInfoCircle,
  AiOutlineUser
} from "react-icons/ai"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
// import CardContainer from './CardContainer';
import { useEffect } from 'react';
import MetaData from '../layout/MetaData';
import CheckoutSteps from './CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import {
  useStripe, Elements
} from "@stripe/react-stripe-js";
import { createOrder, clearErrors } from '../../actions/orderAction';



const Payment = () => {
  const [cardholder, setCardholder] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [EXPMM, setEXPMM] = useState("");
  const [EXPYY, setEXPYY] = useState("");
  const [CVV, setCVV] = useState("");
  const [plans, setPlans] = useState([]);
  const cardNumberInput = document.querySelector(".card-number-input");
  const cardHolderInput = document.querySelector(".card-holder-input");
  const cardMonthInput = document.querySelector(".card-month-input");
  const cardYearInput = document.querySelector(".card-year-input");
  const cardCVCInput = document.querySelector(".card-cvc-input");

  // Get all the Text box
  const cardNumberText = document.querySelector(".card_number");
  const cardHolderText = document.querySelector(".card-holder-name");
  const cardMonthText = document.querySelector(".expire_month");
  const cardYearText = document.querySelector(".expire_year");
  const cardCVCText = document.querySelector(".cvc_number");

  // Front and Back card
  const frontCard = document.querySelector(".Front_card");
  const backCard = document.querySelector(".back_card");

  let originNum = "0000 0000 0000 0000";
  let originMon = "MM";
  let originYear = "YY";
  let originCVC = "000";

  // Number on Card Input


  // Name on Card Input


  // Expire Date on Card Input




  // Card Flip on mouse control
  const cardFlip = () => {
    cardCVCInput.addEventListener("mouseenter", () => {
      frontCard.style.transform = "perspective(1000px) rotateY(-180deg)";
      backCard.style.transform = "perspective(1000px) rotateY(0deg)";
    });
    cardCVCInput.addEventListener("mouseleave", () => {
      frontCard.style.transform = "perspective(1000px) rotateY(0deg)";
      backCard.style.transform = "perspective(1000px) rotateY(180deg)";
    });
  };
  // cardFlip();

  // CVC number on Card Input



  // const dispatch = useDispatch();
  // const alert = useAlert();
  <Elements>
    const elements = useElements();
    const stripe = useStripe();
  </Elements>
  // const payBtn = useRef(null);

  // const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);

  // const submitHandler = async () => {  e.preventDefault();

  //   payBtn.current.disabled = true;

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const { data } = await axios.post(
  //       "/api/v1/payment/process",
  //       paymentData,
  //       config
  //     );

  //     const client_secret = data.client_secret;

  //     if (!stripe || !elements) return;

  //     const result = await stripe.confirmCardPayment(client_secret, {
  //       payment_method: {
  //         card: elements.getElement(CardNumberElement),
  //         billing_details: {
  //           name: user.name,
  //           email: user.email,
  //           address: {
  //             line1: shippingInfo.address,
  //             city: shippingInfo.city,
  //             state: shippingInfo.state,
  //             postal_code: shippingInfo.pinCode,
  //             country: shippingInfo.country,
  //           },
  //         },
  //       },
  //     });

  //     if (result.error) {
  //       payBtn.current.disabled = false;

  //       alert.error(result.error.message);
  //     } else {
  //       if (result.paymentIntent.status === "succeeded") {
  //         order.paymentInfo = {
  //           id: result.paymentIntent.id,
  //           status: result.paymentIntent.status,
  //         };

  //         dispatch(createOrder(order));

  //         history.push("/success");
  //       } else {
  //         alert.error("There's some issue while processing payment ");
  //       }
  //     }
  //   } catch (error) {
  //     payBtn.current.disabled = false;
  //     alert.error(error.response.data.message);
  //   }
  // }; };

  // return (
  //   <Fragment>
  //     <MetaData title="Payment" />
  //     <CheckoutSteps activeStep={2} />
  //     <div className="paymentContainer">
  //       <form className="paymentForm" onSubmit={(e) => submitHandler(e)} >
  //         <Elements>
  //           <Typography>Card Info</Typography>
  //           <div>
  //             <CreditCardIcon />
  //             <CardNumberElement className="paymentInput" />
  //           </div>
  //           <div>
  //             <EventIcon />
  //             <CardExpiryElement className="paymentInput" />
  //           </div>
  //           <div>
  //             <VpnKeyIcon />
  //             <CardCvcElement className="paymentInput" />
  //           </div>
  //           <input type="submit"
  //             value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
  //             ref={payBtn}
  //             className="paymentfromBtn"
  //           />
  //         </Elements>
  //       </form>

  //     </div>
  //   </Fragment>
  // )

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // <Elements> const stripe = useStripe();</Elements>
  const dispatch = useDispatch();
  const alert = useAlert();
  const payBtn = useRef(null);
  const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // payBtn.current.disabled = true;


    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/v1/payment/process",
      paymentData,
      config
    );

    const client_secret = data.client_secret;

    const result = client_secret

    if (result.paymentIntent.status === "succeeded") {
      order.paymentInfo = {
        id: result.paymentIntent.id,
        status: result.paymentIntent.status,
      };

      dispatch(createOrder(order));
    } else {
      alert.error("There's some issue while processing payment ");
    }

    // console.log(data)
    // dispatch(createOrder(order));






    // function handleClick() {
    //   navigate("/success")
    // }

    // navigate("/success");

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/v1/payment/process",
    //     paymentData,
    //     config
    //   );
    // } catch (error) {
    //   payBtn.current.disabled = false;
    //   alert.error(error.response.data.message);
    // }

    // const order = {
    //   shippingInfo,
    //   orderItems: cartItems,
    //   itemsPrice: orderInfo.subtotal,
    //   taxPrice: orderInfo.tax,
    //   shippingPrice: orderInfo.shippingCharges,
    //   totalPrice: orderInfo.totalPrice,
    // };

    // const client_secret = data.client_secret;

    // if (!stripe || !elements) return;




    // const result = async (e) => {
    //   e.preventDefault()

    // };

    //   if (result.error) {
    //     payBtn.current.disabled = false;

    //     alert.error(result.error.message);
    //   } else {

    //     // dispatch(createOrder(order));

    //     // navigate("/success");
    //   }
    // }
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);




  // try {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const { data } = await axios.post(
  //     "/api/v1/payment/process",
  //     paymentData,
  //     config
  //   );

  //   const client_secret = data.client_secret;

  //   // if (!stripe || !elements) return;

  //   const result = () => (client_secret, {
  //     payment_method: {
  //       card: elements.getElement(CardNumberElement),
  //       billing_details: {
  //         name: user.name,
  //         email: user.email,
  //         address: {
  //           line1: shippingInfo.address,
  //           city: shippingInfo.city,
  //           state: shippingInfo.state,
  //           postal_code: shippingInfo.pinCode,
  //           country: shippingInfo.country,
  //         },
  //       },
  //     },
  //   });

  //   if (result.error) {
  //     payBtn.current.disabled = false;

  //     alert.error(result.error.message);
  //   } else {
  //     if (result.paymentIntent.status === "succeeded") {
  //       order.paymentInfo = {
  //         id: result.paymentIntent.id,
  //         status: result.paymentIntent.status,
  //       };

  //       dispatch(createOrder(order));

  //       navigate("/success");
  //     } else {
  //       alert.error("There's some issue while processing payment ");
  //     }
  //   }
  // } catch (error) {
  //   payBtn.current.disabled = false;
  //   alert.error(error.response.data.message);
  // }

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const { data } = await axios.post(
  //     "/api/v1/payment/process",
  //     paymentData,
  //     config
  //   );

  //   const order = {
  //     shippingInfo,
  //     orderItems: cartItems,
  //     itemsPrice: orderInfo.subtotal,
  //     taxPrice: orderInfo.tax,
  //     shippingPrice: orderInfo.shippingCharges,
  //     totalPrice: orderInfo.totalPrice,
  //   };

  //   // const client_secret = data.client_secret;

  //   // if (!stripe || !elements) return;




  // const result = async (e) => {
  //   e.preventDefault()

  // };

  // if (result.error) {
  //   payBtn.current.disabled = false;

  //   alert.error(result.error.message);
  // } else {

  //   // dispatch(createOrder(order));

  //   navigate("/success");
  // }




  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />

      <div className="cc__main__container">
        <form className="paymentForm" >
          <div className="form__container">
            <h1 className="header">Credit Card Form</h1>
            <p className="subheader">by <span>Utba Zafar</span></p>
            <div className="card__main">
              <div className="Front_card">
                <div className="top_card">
                  <span className="visa">VISA</span>
                  <div className="logo">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="middle_card">
                  <span className="chip"></span>
                  <div className="card_number">{cardnumber}</div>
                </div>
                <div className="bottom_card">
                  <div className="card_info">
                    <div className="card_holder_name">{cardholder}</div>
                  </div>
                  <div className="card_info">
                    <div className="card_holder_info">
                      <span className="expire_month">{EXPMM}</span>
                      <span>/</span>
                      <span className="expire_year">{EXPYY}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="back_card">
                <div className="top_card">
                  <span className="black_strip"></span>
                  <div className="cvc_strip">
                    <span className="cvc_number">{CVV}</span>
                  </div>
                </div>
                <div className="bottom_card">
                  <div className="flex">
                    <span className="sticker"></span>
                    <div className="logo1">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="">
              <div className="inputBox" onChange={(e) => setCardholder(e.target.value)}>
                <span>card holder name</span>
                <input type="text" maxlength="30" className="card-holder-input" placeholder="Card Holder Name" />
              </div>
              <div className="inputBox" onChange={(e) => setCardNumber(e.target.value.replace(/\d{4}(?=.)/g, "$& "))}>
                <span>card number</span>
                <input type="text" maxlength="16" className="card-number-input" placeholder="0000000000000000" />
              </div>

              <div className="multi__box">
                <div className="inputBox" onChange={(e) => setEXPMM(e.target.value)}>
                  <span>exp. (MM)</span>
                  <input type="text" maxlength="2" className="card-month-input" placeholder="00" />
                </div>
                <div className="inputBox" onChange={(e) => setEXPYY(e.target.value)}>
                  <span>exp. (YY)</span>
                  <input type="text" maxlength="2" className="card-year-input" placeholder="00" />
                </div>
                <div className="inputBox" onChange={(e) => setCVV(e.target.value) && cardFlip()} >
                  <span>CVC</span>
                  <input type="text" maxlength="3" className="card-cvc-input" placeholder="000" />
                  <button
                    type="button"
                    // value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
                    ref={payBtn}
                    classNameName="paymentFormBtn"
                    onClick={(e) => { submitHandler(e) && navigate("/success") }}
                  >{`Pay - ₹${orderInfo && orderInfo.totalPrice}`}</button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>

    </Fragment>
  )

}
export default Payment