import React from "react"
//styles
import styled from "styled-components"
import { Container, CenterContent, Button } from "../style/globalStyle"

//assets
import projectBg from "../assets/projects/bg-projects.jpg"
import { dataProject } from "../assets/dataProjects"
import { CardImg } from "../UI/CardImg"

export const Projects = () => {
  return (
    <Container addBg={true} bg={projectBg}>
      <CenterContent>
        <h4>Projek UMKM yang telah berkolaborasi dengan Era Studio</h4>
        <CardImg num={3} datas={dataProject} />
        <Button to="/projects">Lihat Project Lain</Button>
      </CenterContent>
    </Container>
  )
}
