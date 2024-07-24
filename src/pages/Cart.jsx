import pic7 from "../assets/images/pic7.png";
import pic9 from "../assets/images/pic9.png";
import "./Cart.css";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [number, setNumber] = useState(0);

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const increment = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const increase = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-img pe-2">
            <img src={pic7} className="pic-cart" alt="Product 1" />
          </div>
          <div className="cart-details">
            <h5 className="product-name">Blossom Elegance Heels</h5>
            <p className="product-description">
              Step into a world of sophistication and charm with our floral
              designed Blossom Elegance Heels.
            </p>
            <span className="product-price">$320.000</span>
            <span className="like me-1">
              <FaRegHeart />
            </span>
            <span className="like">
              <RiDeleteBin6Line />
            </span>

            <div className="select pt-2 ">
              <span className="quantity ">Qty</span>
              <span className="minus mx-2 " onClick={decrement}>
                -
              </span>
              <span className="box p-1">{number}</span>
              <span className="plus mx-2" onClick={increment}>
                +
              </span>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h5 className="summary">Order Summary</h5>
          <div className="delivery">
            <span>2 items</span>
            <span>$395.00</span>
          </div>
          <div
            className="delivery pb-2"
            style={{ borderBottom: "1px solid gray" }}
          >
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div
            className="delivery pb-2"
            style={{ borderBottom: "1px solid gray" }}
          >
            <span>Total</span>
            <span>$395.00</span>
          </div>
          <div className="checkout">
            <p>Do you have a Promo Code?</p>
            <Link
              to="/checkout"
              className="checkout-link text-decoration-none bg-black text-white text-center"
            >
              Check out
            </Link>
            <p className="member mt-2">Become a member to enjoy discount</p>
          </div>
        </div>
      </div>

      <div className="cart-items2">
        <div className="cart-img pe-2">
          <img src={pic9} className="pic-cart" alt="Product 1" />
        </div>
        <div className="cart-details">
          <h5 className="product-name">Blossom Elegance Heels</h5>
          <p className="product-description">
            Step into a world of sophistication and charm with our floral
            designed Blossom Elegance Heels.
          </p>
          <span className="product-price">$320.000</span>
          <span className="like me-1">
            <FaRegHeart />
          </span>
          <span className="like">
            <RiDeleteBin6Line />
          </span>
          <div className="select pt-2 ">
            <span className="quantity ">Qty</span>
            <span className="minus mx-2" onClick={decrease}>
              -
            </span>
            <span className="box p-1">{number}</span>
            <span className="plus mx-2" onClick={increase}>
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
