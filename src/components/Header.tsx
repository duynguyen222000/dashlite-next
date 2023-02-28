import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import logodark from "../assets/images/logo-dark.png";
import Image from "next/image";
export const Header = () => {
  const [heighScroll, setHeighScroll] = useState<boolean>(false);
  const [resize, setResize] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeighScroll(true);
      } else {
        setHeighScroll(false);
      }
    };
    const handleResize = () => {
      window.innerWidth < 577 ? setResize(true) : setResize(false);
      console.log(resize);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <header id="header">
      <Navbar className={heighScroll ? "bg-light" : ""} fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            {!heighScroll ? (
              <Image src={logo} alt="" className="header-logo" />
            ) : (
              <Image src={logodark} alt="" className="header-logo" />
            )}
          </Navbar.Brand>

          <Nav className="ms-auto align-items-center ">
            <Nav.Link className={heighScroll ? "dark" : "light"} href="#home">
              {resize ? "Preview" : "All Preview"}
            </Nav.Link>
            <Nav.Link className={heighScroll ? "dark" : "light"} href="#link">
              Features
            </Nav.Link>
            <Nav.Link className={heighScroll ? "dark" : "light"} href="#link">
              Docs
            </Nav.Link>
            <Nav.Link
              className={`d-none-res ${heighScroll ? "dark" : "light"}`}
              href="#link"
            >
              Need Helps
            </Nav.Link>
            <Nav.Link className="purchase d-none-res" href="#link">
              Purchase Now
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
