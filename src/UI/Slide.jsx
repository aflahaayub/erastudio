import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Button } from "../style/globalStyle"

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 1.3em;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
    background-color: black;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  article {
    position: absolute;
    padding: 1rem;
    z-index: 5;
    text-align: center;
  }

  .hide {
    display: none;
  }

  @media (max-width: 52rem) {
    article {
      h3 {
        font-size: 1.4rem;
        padding: 0;
      }
      button {
        font-size: 0.7rem;
        padding: 1rem;
      }
    }
  }
`
export const Slide = ({ slideData }) => {
  const [changeImg, setChangeImg] = useState(false)

  return (
    <>
      <SlideContainer>
        {changeImg ? null : (
          <div
            style={{
              background: "gray",
              height: "30rem",
              width: "20rem",
            }}
          />
        )}
        <img
          className={changeImg ? "" : "hide"}
          src={slideData.bgImg}
          onLoad={() => setChangeImg(true)}
          alt="Service Era Studio"
        />
        <article>
          <h3>{slideData.title}</h3>
          <Button to={`/layanan${slideData.route}`}>View</Button>
        </article>
      </SlideContainer>
    </>
  )
}
