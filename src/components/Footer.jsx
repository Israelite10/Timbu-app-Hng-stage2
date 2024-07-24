import React from "react";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="footer-text mt-5">
        <p className="bg-dark p-3 text-white text-center mb-5">
          Become a member to enjoy unlimited discounts today.
        </p>
      </div>
      <div className="footer text-white p-5">
        <table>
          <tr className="head">
            <th>Navigation</th>
            <th>Contact</th>
            <th>About Us</th>
            <th>Follow Us</th>
          </tr>
          <tr className="body">
            <td>Home</td>
            <td>Customer Service</td>
            <td>Our Story</td>
            <td>
              <span>
                <FaInstagramSquare />
              </span>
              <span className="mx-1">
                <FaLinkedin />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span className="mx-1">
                <FaXTwitter />
              </span>
            </td>
          </tr>
          <tr className="body">
            <td>Products</td>
            <td>FAQs</td>
            <td>Careers</td>
          </tr>
          <tr className="body">
            <td>About</td>
            <td>Shipping & Returns</td>
            <td>Press</td>
          </tr>

          <tr>
            <td colSpan={2}></td>
            <td className="f-last">Return Policy</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Footer;
