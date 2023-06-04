import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const CardStyle = styled.div`
  overflow: hidden;
  padding: 4rem 0px;
  max-width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  .overlay {
    width: 20rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    background-color: black;
    &::after {
      content: "";
      position: absolute;
      display: block;
      background: inherit;
      opacity: 0.8;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:hover {
      cursor: pointer;
      background-color: transparent;
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }
  img {
    width: 100%;
    max-height: 14rem;
    object-fit: cover;
    object-position: center;
    position: relative;
    display: block;
  }
  .title {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
    position: absolute;
    z-index: 5;
    text-align: center;
    top: 4rem;
    left: 0;
    right: 0;
    &:hover {
      color: black;
    }
  }

  .hide {
    display: none;
  }
  @media (max-width: 70rem) {
    padding: 1rem 0px;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`
export const CardImg = ({ datas, num }) => {
  const [isShown, setIsShown] = useState(false)
  const [numTitle, setNumTitle] = useState()

  const setHovered = data => {
    setNumTitle(data.id)
    setIsShown(true)
  }
  const setLeave = data => {
    setNumTitle(data.length + 1)
    setIsShown(false)
  }
  return (
    <CardStyle>
      {datas.slice(0, num).map((data, index) => {
        return (
          <Link
            to={data.ig}
            target="_blank"
            className="overlay"
            key={index}
            onMouseEnter={() => setHovered(data)}
            onMouseLeave={() => setLeave(data)}
          >
            {index == numTitle ? (
              <p className="hide">{data.title}</p>
            ) : (
              <p className="title">{data.title}</p>
            )}

            <img src={data.photo} alt="Project" />
          </Link>
        )
      })}
    </CardStyle>
  )
}
