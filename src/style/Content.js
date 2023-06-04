import styled from "styled-components"

export const Content = styled.section`
  padding-right: 2rem;
  h1 {
    line-height: 4rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  p {
    font-size: 1.5rem;
    padding: 1.3rem 0;
  }
  h3 {
    line-height: 2.5rem;
    font-size: 1.7rem;
    font-weight: 400;
  }

  @media (max-width: 62rem) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0;
  }

  @media (max-width: 40rem) {
    h1 {
      line-height: 2rem;
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    h3 {
      line-height: 1.5rem;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`
