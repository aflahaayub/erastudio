import styled, { css, createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;

    font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body, button {
    font-family: 'Wix Madefor Display', sans-serif;
    line-height: 1;
  }

  a{
    color: black;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1rem 1rem;

  ${props =>
    props.addBg &&
    css`
      background-image: ${props => "url(" + props.bg + ")"};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}

  ${props =>
    props.addGrid &&
    css`
      display: grid;
      align-items: center;

      @media (min-width: 62rem) {
        padding: 1rem 3.5rem;
        grid-template-columns: 1fr 1fr;
      }
    `}
`

export const CenterContent = styled.section`
  padding: 1rem 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: #484782;
    font-size: 1.7rem;
  }
`
export const Button = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  cursor: pointer;
  color: white;
  background-color: #6d299f;
  &:hover {
    border-bottom: none;
    background-color: #2e1243;
  }
`
export const Card = styled.div`
  width: 20rem;
  height: 20rem;
  padding: 2rem;
  margin: 2rem;
  background-color: white;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  h5 {
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1.3rem 0;
  }

  p {
    line-height: 1.3rem;
  }
`
