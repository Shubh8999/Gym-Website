import React from 'react'
import { Fragment, useEffect } from 'react'
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.jsx";
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import img1 from "../Home/01.jpg"
import img2 from "../Home/02.jpg"
import img3 from "../Home/03.jpg"
import img4 from "../Home/04.jpg"


const Home = () => {
  window.scrollTo(0, 0);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(state => state.products)

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (<Fragment>
        <MetaData title="Gym Website" />
        
        <div className="banner">
          {/* <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1> */}

          {/* <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a> */}

          <div className="slowFade" style={{"z-index": -1000}}>
          {/* <h1 >FIND AMAZING PRODUCTS BELOW</h1>  */}
          <div className="slide">
              <img src={img1} alt="img" />
            </div>
            <div className="slide">
              <img src={img2} alt="img" />
            </div>
            <div className="slide">
              <img src={img3} alt="img" />
            </div>
            <div className="slide">
              <img src={img4} alt="img" />
            </div>
          </div>

          

          <p className='Para1'> </p>


        </div>

        

        <h2 className='homeHeading'>Latest Products</h2>

        <div className="container" id="container">

          {products && products.map(product => (
            <ProductCard product={product} />
          ))}

        </div>

        {/* <div className="banner"> */}
          {/* <p style="z-index:-1">Welcome to Ecommerce</p>
          <h1 style="z-index:-1">FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container" style="z-index:-1">
            <button style="z-index:-1">
              Scroll
            </button>
          </a>  */}


          {/* <div className="slides slowFade" style="  z-index:-1000;">
            <div className="slide">
              <img src="01.jpg" alt="img" />
            </div>
            <div className="slide">
              <img src="02.jpg" alt="img" />
            </div>
            <div className="slide">
              <img src="03.jpg" alt="img" />
            </div>
            <div className="slide">
              <img src="04.jpg" alt="img" />

            </div>

          </div>

          <p style="  z-index:100;
        margin-top: -400px;; color:white; font-size: 40px;">Discover The Legacy</p>
          <h1 style="color:white">FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container" >
            <button >
              EXPLORE DOWN
            </button>
          </a>

        </div>


        <h2 className='homeHeading' style="margin-top:200px">Latest Products</h2>

        <div className="container" id="container">
        </div> */}
      </Fragment>)}
    </Fragment>
  )
}

export default Home;