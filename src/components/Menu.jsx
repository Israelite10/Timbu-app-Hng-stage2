import React from "react";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import pic5 from "../assets/images/pic5.png";
import pic6 from "../assets/images/pic6.png";
import "./Menu.css";

const Items = () => {
  return (
    <>
      <div className="pic-container ">
        <div className="d-flex flex-wrap ">
          <img
            src={pic2}
            className="pic1 me-4"
            width={400}
            height={350}
            alt=""
          />
          <img
            src={pic1}
            className="pic2 me-4"
            width={320}
            height={400}
            alt=""
          />
          <img
            src={pic3}
            className="pic3 me-4"
            width={260}
            height={280}
            alt=""
          />
          <img src={pic4} className="pic4" width={350} height={400} alt="" />
        </div>

        <div className="pic-text d-flex">
          <div className="mt-0  collection me-5">
            <h1 className="mx-5 px-5 text">
              Women’s <br />
              Collection
            </h1>
            <p className="mx-5 px-5 text-danger">
              Featuring a curated selection of stylish clothing,
              <br />
              footwear, and accessories.
            </p>
          </div>

          <span className="incline-pics text-wrap ms-lg-5 d-flex ">
            <img
              src={pic5}
              className="pic5 pe-lg-3  ps-lg-4 ms-lg-5 "
              style={{ marginTop: -60 }}
              width={300}
              height={275}
              alt=""
            />
            <img
              src={pic6}
              className="pic6 mt-3"
              width={358}
              height={200}
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Items;
