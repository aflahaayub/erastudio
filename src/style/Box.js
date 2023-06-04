import styled from "styled-components"
export const Box = styled.div`
  position: absolute;
  top: ${props => props.topSize};
  right: 2rem;
  z-index: 1;
  width: 26rem;
  height: 20rem;
  background-color: ${props => props.bgColor};
  backdrop-filter: blur(20px);
`
