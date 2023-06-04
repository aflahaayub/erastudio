import React from "react"

//assets
import imgHeader from "../assets/header/photo.jpg"
import bgHeader from "../assets/header/main-header.jpg"

//component
import { Navbar } from "../components/Navbar"
import { About } from "../components/About"
import { Reasons } from "../components/Reasons"
import { Service } from "../components/Service"
import { Projects } from "../components/Projects"
import { Review } from "../components/Review"
import { Footer } from "../components/Footer"

//style
import styled, { css } from "styled-components"
import { Button, Container } from "../style/globalStyle"
import { Content } from "../style/Content"
import { Image, ImageHeader } from "../style/Header"
import { Box } from "../style/Box"
export const Home = () => {
  return (
    <>
      <Navbar />
      <Container addBg={true} bg={bgHeader} addGrid={true}>
        <Content>
          <h1>Kamu Pelaku UMKM?</h1>
          <p>Kamu belum memiliki tim konten dan marketing?</p>
          <h3>Tidak usah khawatir! Kolaborasikan usahamu dengan Era Studio!</h3>
          <Button
            to="https://api.whatsapp.com/send?phone=62895413354000&text=Hello,%20Eradio!%20Saya%20ingin%20berkolaborasi%20"
            target="_blank"
          >
            Mulai Kolaborasi
          </Button>
        </Content>
        <ImageHeader>
          <Box topSize={"4rem"} bgColor={"rgba(187, 187, 193, 0.5)"}></Box>
          <Image topSize={"6rem"} src={imgHeader} alt="Social Media Trafic" />
        </ImageHeader>
      </Container>
      <About />
      <Reasons />
      <Service />
      <Projects />
      <Review />
      <Footer />
    </>
  )
}
