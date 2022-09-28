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


const Home = () => {
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
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>

        </div>

        <h2 className='homeHeading'>Latest Products</h2>

        <div className="container" id="container">

          {products && products.map(product => (
            <ProductCard product={product} />
          ))}

        </div>
      </Fragment>)}
    </Fragment>
  )
}

export default Home;