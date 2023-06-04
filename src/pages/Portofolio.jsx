import React from "react"
import styled from "styled-components"

import { Navbar } from "../components/Navbar"
//styles
import { Button, CenterContent, Container } from "../style/globalStyle"
import { Image, ImageHeader } from "../style/Header"
import { CardImg } from "../UI/CardImg"

const Header = styled.h1`
  font-size: 2.5rem;
  color: #484782;
  padding: 1rem 0;
`

const Penjelasan = styled.p`
  font-size: 1.3rem;
  padding: 1rem 2rem;
`

//assets
import bgHeader from "../assets/header/main-header.jpg"
import { dataProject } from "../assets/dataProjects"

export const Portofolio = () => {
  return (
    <>
      <Navbar />
      <Container addBg={true} bg={bgHeader}>
        <CenterContent>
          <Header>Proyek</Header>
          <Penjelasan>
            Curious about the work we produced? Here you can find our
            portfolios. We pour our hearts and skills into each project. The end
            results are not only beautiful. They are also supporting our clients
            to thrive more in their businesses.
          </Penjelasan>
          <CardImg num={6} datas={dataProject} />
        </CenterContent>
      </Container>
    </>
  )
}
