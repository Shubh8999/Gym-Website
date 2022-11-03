// import React, { useEffect, useState } from 'react';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import Payment from './Payment';

// function PaymentSec() {

//     // const [stripeApiKey, setStripeApiKey] = useState("");

//     // const stripePromise = loadStripe(stripeApiKey);

//     // async function getStripeApiKey() {
//     //     const { data } = await axios.get("/api/v1/stripeapikey");

//     //     setStripeApiKey(data.stripeApiKey);
//     // }

//     // useEffect(() => {
//     //     getStripeApiKey();
//     // }), [];

//     const stripeApiKey = "pk_test_51LpPGXSIXYSQlYnfD3Gvy6vSd9yjBJI3ZYFwl6QiZ14EyUdCMuZ9pUPj5Lf3kCfaYh0btlcplobABepQJMmOGaqf00NVSVYLHa"

//     const stripePromise = loadStripe(stripeApiKey)
    
//     return (
//         <Elements stripe={stripePromise} >
//             <Payment />
//         </Elements>
//     )
// }

// export default PaymentSec;