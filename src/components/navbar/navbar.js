import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/image/navbar/Logo UIFW 2022 1.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // MobileIcon,
  NavMenu,
  NavItem,
  NavItem2,
  NavLinks,
  NavLinks2,
  NavImg,
  NavLogoScroll,
  NavLinksScroll,
} from "./navbar.elements";
// import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname === "/");
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            {/* {location.pathname === "/" ? (
              <NavLogoScroll
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMobileMenu}
              >
                <NavImg src={logo} alt="bye" />
              </NavLogoScroll>
            ) : (
              <NavLogo to="/" onClick={closeMobileMenu}>
                <NavImg src={logo} alt="bye" />
              </NavLogo>
            )} */}

            {/* <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon> */}
            <NavLogo to="/" onClick={closeMobileMenu}>
                <NavImg src={logo} alt="bye" />
              </NavLogo>
            <NavMenu click={click}>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    About
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Gallery
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Gallery
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Blog
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Blog
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem>
                {location.pathname === "/" ? (
                  <NavLinks
                    activeClass="active"
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact Us
                  </NavLinks>
                ) : (
                  <NavLinksScroll
                    onClick={() => {
                      handleClick() && setNavbar(false);
                    }}
                    click={click}
                    to="/"
                  >
                    Contact Us
                  </NavLinksScroll>
                )}
              </NavItem>
              <NavItem2>
                <NavLinks2
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/register"
                >
                  Register
                </NavLinks2>
              </NavItem2>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
