import React, { useState, useEffect } from "react";
import logo from "../../assets/navbar/Logo-UIFW.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinks2,
  NavImg,
  NavText,
  NavHref,
  NavHrefDropdown,
  NavDropdown,
  NavItemDropdown,
  NavArrowDown,
  NavArrowUp,
} from "./navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
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
            <NavLogo to="/" onClick={closeMobileMenu}>
            <NavImg src={logo} alt="bye" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem>
                <NavLinks
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/product"
                >
                  LookBook
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/portfolio"
                >
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/portfolio"
                >
                  Contact Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks2
                  onClick={() => {
                    handleClick() && setNavbar(false);
                  }}
                  click={click}
                  to="/portfolio"
                >
                  Register
                </NavLinks2>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;