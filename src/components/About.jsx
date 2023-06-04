import React from "react"
import styled from "styled-components"
//style
import { Container } from "../style/globalStyle"
import { Box } from "../style/Box"
import { Image, ImageHeader } from "../style/Header"
const AboutSection = styled.section`
  width: 100%;
  height: 80%;
  background-color: #e5eced4b;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    color: #484782;
    line-height: 2rem;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }

  @media (min-width: 52rem) {
    padding: 3rem;
  }
`
//assets
import photo from "../assets/about-photo.jpg"
export const About = () => {
  return (
    <Container addGrid={true}>
      <ImageHeader>
        <Box topSize={"11rem"} bgColor={"#F1DDD7"}></Box>
        <Image topSize={"10rem"} src={photo} alt="Business Team" />
      </ImageHeader>
      <AboutSection>
        <h4>
          Dapatkan kemudahan dalam berbisnis ala UMKM, dan raih customer
          sebanyak-banyaknya!
        </h4>
        <p>
          Era Studio (Eradio) akan menjadi wadah bagi teman-teman UMKM Indonesia
          dalam mengelola pengembangan bisnis menjadi lebih naik kelas.
          Teman-teman UMKM masih bingung bagaimana mengelola sosial media,
          bagaimana merealisasikan ide pengembangan bisnis dan lainnya itu semua
          akan terjawab dalam wadah Era Studio ini.{" "}
        </p>
      </AboutSection>
    </Container>
  )
}
