import React, { useState } from "react"
import { Link } from "react-router-dom"
import { dataServices } from "../assets/dataServices"
import styled from "styled-components"

const Submenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 100%;
  width: 54vw;
  position: absolute;
  top: 50px;
  left: 8px;
  list-style: none;
  text-align: start;
  background-color: #6d299f;
  color: white;
  padding: 1rem 0;
  z-index: 10;

  .clicked {
    display: none;
  }

  @media (max-width: 52rem) {
    display: none;
  }
`

const List = styled(Link)`
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #2e1243;
  }
`

export const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <Submenu
        className={dropdown ? "clicked" : ""}
        onClick={() => setDropdown(!dropdown)}
        onMouseEnter={() => setDropdown(true)}
      >
        {dataServices.map((item, index) => {
          return (
            <li key={index}>
              <List to={item.route} onClick={() => setDropdown(false)}>
                {item.title}
              </List>
            </li>
          )
        })}
      </Submenu>
    </>
  )
}
