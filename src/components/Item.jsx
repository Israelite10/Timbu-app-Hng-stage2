import React from "react";
import "./Item.css";
import pic7 from "../assets/images/pic7.png";
import pic8 from "../assets/images/pic8.png";
import pic9 from "../assets/images/pic9.png";
import pic10 from "../assets/images/pic10.png";
import pic11 from "../assets/images/pic11.png";
import pic12 from "../assets/images/pic12.png";
import pic13 from "../assets/images/pic13.png";
import pic14 from "../assets/images/pic14.png";
import pic15 from "../assets/images/pic15.png";
import pic16 from "../assets/images/pic16.png";
import pic17 from "../assets/images/pic17.png";
import pic18 from "../assets/images/pic18.png";
import pic19 from "../assets/images/pic19.png";
import pic20 from "../assets/images/pic20.png";
import pic21 from "../assets/images/pic21.png";
import { FaRegHeart } from "react-icons/fa";

const Item = () => {
  return (
    <>
      <div className="all-container">
        <h3 className="match ms-lg-5 ps-lg-4 match mt-lg-5 mb-lg-3 ">
          Find Your Perfect Match
        </h3>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col">
              <div className="list-items1 ">
                <img src={pic7} className="resized-img my-1" alt="Product 1" />
                <h5 className="list-title">Blossom Elegance Heels</h5>
                <p className="card-text">
                  Step into a world of sophistication and charm with our floral
                  designed Blossom Elegance Heels.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic8} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Serenity Beige Power Suit</h5>
                <p className="card-text">
                  Perfectly tailored for for the modern woman. A sleek,
                  professional look, this suit exudes confidence and grace.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic9} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Rose Petal Stilettos</h5>
                <p className="card-text">
                  Step into elegance with our Rose Petal Stilettos, the perfect
                  blend of charm and sophistication
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col">
              <div className="list-items1">
                <img src={pic10} className="resized-img my-1" alt="Product 1" />
                <h5 className="list-title">Earth Tones Boots</h5>
                <p className="card-text">
                  Enjoy rugged durability and timeless style with our Timberland
                  Earth Tones Boots, perfect for any adventure.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic11} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Azure Blossom Gown</h5>
                <p className="card-text">
                  Embrace effortless elegance with the Azure Blossom
                  Gown,perfect for any occasion.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic12} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Ivory Elegance Stilettos</h5>
                <p className="card-text">
                  Elevate your style with the timeless sophistication of Ivory
                  Elegance Stilettos, perfect for any chic ensemble.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col">
              <div className="list-items1">
                <img src={pic13} className="resized-img my-1" alt="Product 1" />
                <h5 className="list-title">White High-Top Sneakers</h5>
                <p className="card-text">
                  Step up your casual style with the Altar White High-Top
                  Sneakers blending comfort and modern flair effortlessly.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic14} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">EverComfort Sweatshirt</h5>
                <p className="card-text">
                  Stay cozy and stylish with the Evergreen Comfort Sweatshirt,
                  your go-to for effortless, everyday warmth.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic15} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">PureStride White Sneakers</h5>
                <p className="card-text">
                  Step into timeless simplicity with PureStride White Sneakers,
                  perfect for any casual outfit.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col">
              <div className="list-items1">
                <img src={pic16} className="resized-img my-1" alt="Product 1" />
                <h5 className="list-title">Find Your Perfect Match</h5>
                <p className="card-text">
                  Brighten up your look with our new blush charm, featuring a
                  chic, stylized baby pink design for a trendy twist.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic17} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Urban Elegance Necklace</h5>
                <p className="card-text">
                  Introducing the Urban Elegance Necklace, a modern design that
                  adds a sophisticated touch to any outfit.
                </p>
                <span className="price">$320.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic18} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">LuxLeather Women's Boots</h5>
                <p className="card-text">
                  Step into sophistication with LuxLeather Women's Boots,
                  crafted for both style and durability.
                </p>
                <span className="price">$310.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col">
              <div className="list-items1">
                <img src={pic19} className="resized-img my-1" alt="Product 1" />
                <h5 className="list-title">Blossom Elegance Heels</h5>
                <p className="card-text">
                  Step into a world of sophistication and charm with our floral
                  designed Blossom Elegance Heels.
                </p>
                <span className="price">$600.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic20} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Summer floral</h5>
                <p className="card-text">
                  Enjoy summer with our stylish and easy to wear Chic Grace. A
                  timeless design that blends classic with elegance.
                </p>
                <span className="price">$350.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>

            <div className="col">
              <div className="list-items1">
                <img src={pic21} className="resized-img my-1" alt="Product 3" />
                <h5 className="list-title">Vivid Spectrum</h5>
                <p className="card-text">
                  Make a bold statement with Vivid Spectrum Sneakers, featuring
                  a vibrant abstract design that turns heads.
                </p>
                <span className="price">$720.000</span>
                <span className="me-4 text-danger">
                  <FaRegHeart />
                </span>
                <span className="bg-dark text-white p-1">Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
