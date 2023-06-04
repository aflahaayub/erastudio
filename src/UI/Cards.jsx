import React from "react"
import styled from "styled-components"
//style
import { Card } from "../style/globalStyle"
const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: start;
  padding: 2rem 0;

  @media (min-width: 52rem) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem 10rem;
  }
`
export const Cards = props => {
  return (
    <ContainerCard>
      {props.datas.map((data, index) => (
        <Card key={index}>
          <img src={data.logo} alt="logo" />
          <h5>{data.title}</h5>
          <p>{data.explanation}</p>
        </Card>
      ))}
    </ContainerCard>
  )
}
