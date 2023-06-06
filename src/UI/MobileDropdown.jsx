import React from "react"
import styled from "styled-components"
const WrapList = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  left: 0;

  flex-direction: column;
  width: 100%;
  padding-top: 0.5rem;
`

import { dataServices } from "../assets/dataServices"
export const MobileDropdown = () => {
  return (
    <WrapList>
      {dataServices.map((item, index) => {
        return (
          <li key={index}>
            <List to={item.route} onClick={() => setDropdown(false)}>
              {item.title}
            </List>
          </li>
        )
      })}
    </WrapList>
  )
}
