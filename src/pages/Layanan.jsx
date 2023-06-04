import React from "react"
import styled from "styled-components"

import { Navbar } from "../components/Navbar"
//styles
import { Button, Container } from "../style/globalStyle"
import { Image, ImageHeader } from "../style/Header"
//assets
import bgHeader from "../assets/header/main-header.jpg"

const LayananContent = styled.section`
  h2 {
    padding-bottom: 2rem;
    color: #6d299f;
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`

export const Layanan = ({ data }) => {
  return (
    <>
      <Navbar />
      <Container addBg={true} bg={bgHeader} addGrid={true}>
        <LayananContent>
          <h2>{data.title}</h2>
          <p>{data.explanation}</p>
          <Button to={data.msg} target="_blank">
            Bicarakan Lebih Lanjut
          </Button>
        </LayananContent>
        <ImageHeader>
          <Image
            rightSize={"1rem"}
            topSize={"8rem"}
            src={data.bgImg}
            alt="Social Media Trafic"
          />
        </ImageHeader>
      </Container>
    </>
  )
}
