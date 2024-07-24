import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="mb-4 bg-white">
      <Container>
        <Navbar.Brand as={Link} to="/">
          FIT <span className="text-danger">&</span> FOOT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/collection" className="text-danger">
              Collection
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className=" profile">
              <CgProfile />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="cart ">
              <IoCartOutline />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className=" love">
              <FaRegHeart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
