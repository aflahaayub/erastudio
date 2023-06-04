import React, { useState, useEffect } from "react"
import Carousel from "react-elastic-carousel"

import { Slide } from "./Slide"
import styled from "styled-components"

const Container = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .arrow {
    cursor: pointer;
    padding: 0.5rem;
    margin: 0 1rem;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 50%;
    &:hover {
      background-color: purple;
    }
  }

  @media (min-width: 52rem) {
    padding: 5rem 4rem;
    width: 75%;
  }
`

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

export const Carousels = ({ datas }) => {
  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        {datas.map((data, index) => (
          <div key={index}>
            <Slide slideData={data} key={index} />
          </div>
        ))}
      </Carousel>
    </Container>
  )
}
