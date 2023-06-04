import styled from "styled-components"
export const ImageHeader = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 62rem) {
    display: none;
  }
`

export const Image = styled.img`
  position: absolute;
  top: ${props => props.topSize};
  right: ${props => props.rightSize};
  z-index: 5;
  height: 20rem;
`
