import React, { useState, useEffect } from "react";
import { menuData } from "../data/MenuData";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Button } from "./Button";

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 999;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;

const NavMenu = styled.i`
  display: flex;
  align-items: center;
  margin-right: -8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-style: normal;
`;

function Navbar({ toggle }) {

  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  function changeBackground() {
    if(window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground)
    };

    watchScroll();
    return () => {
      window.removeEventListener('scroll', changeBackground)
    };
  }, []);

  let style = {
    backgroundColor: navbar || location.pathname !== '/' ? '#000' : 'transparent',
    transition: '0.4s'
  }

  return (
    <Nav style = {style}>
      <Logo to="/">kawaiigareeeee</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
