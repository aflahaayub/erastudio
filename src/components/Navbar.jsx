// import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

//style
const Nav = styled.nav`
  max-width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
  margin: 1rem 3.5rem;

  li {
    margin: 0 1rem;
    @media (max-width: 52rem) {
      width: 100%;
    }
  }
`

const WrapList = styled.ul`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: saturate(180%) blur(10px);

  @media (max-width: 52rem) {
    display: ${props => props.expanded};
    ${props =>
      props.expanded &&
      css`
        position: absolute;
        top: 80px;
        left: 0;

        flex-direction: column;
        width: 100%;
        padding-top: 0.5rem;
      `}
  }
`

const List = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  margin-top: 0.2rem;
  &:hover {
    color: white;
    background-color: #6e299f7a;
  }

  ${props =>
    props.activebtn &&
    css`
      color: white;
      background-color: #6d299f;
      &:hover {
        border-bottom: none;
        background-color: #2e1243;
      }
    `};

  @media (min-width: 52rem) {
    margin: 0 0.5rem;
  }
`

const Menu = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 25%;
  color: white;
  background-color: #6d299f;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  @media (min-width: 52rem) {
    display: none;
  }
`

const Image = styled(Link)`
  img {
    width: 38px;
    height: 59px;
  }
`

//assets
import logo from "../assets//header/Logo.jpg"
import { useState } from "react"

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <Nav>
      <Image to="/">
        <img src={logo} alt="logo" />
      </Image>
      <Menu onClick={() => setToggleMenu(!toggleMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </Menu>
      <WrapList expanded={toggleMenu ? "flex" : "none"}>
        <li>
          <List smooth to="#layanan">
            Layanan
          </List>
        </li>
        <li>
          <List>
            <Link to="/projects">Proyek</Link>
          </List>
        </li>
        <li>
          <List href="#">Blog</List>
        </li>
        <li>
          <List
            activebtn={true}
            to="https://api.whatsapp.com/send?phone=62895413354000&text=Hello,%20Eradio!%20Saya%20ingin%20bertanya%20..."
            target="_blank"
          >
            Hubungi Kami
          </List>
        </li>
      </WrapList>
    </Nav>
  )
}
