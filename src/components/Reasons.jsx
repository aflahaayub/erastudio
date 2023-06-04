import React from "react"
import styled from "styled-components"
//UI
import { Cards } from "../UI/Cards"
//style
import { Container, CenterContent } from "../style/globalStyle"

//assets
import bgImg from "../assets/reason/bg-reason.jpg"
import homeLogo from "../assets/reason/home.svg"
import qualityLogo from "../assets/reason/quality.svg"
import moneyLogo from "../assets/reason/money.svg"
import colabLogo from "../assets/reason/colab.svg"
//datas
const dataCard = [
  {
    logo: homeLogo,
    title: "Era Studio adalah Rumah",
    explanation:
      "Menjadikan UMKM sebagai sahabatdan rekan kolaborasi yang kapan saja bisa curhat seputar    pengembangan bisnis dan trend lainnya",
  },
  {
    logo: qualityLogo,
    title: "Loyalitas = Kualitas",
    explanation:
      "Era Studio memberikan manajemen yang berkualitas dengan mengutamakan loyalitas",
  },
  {
    logo: moneyLogo,
    title: "Sahabat Kantong UMKM",
    explanation:
      "Semua yang ada di Era Studio sangat menyesuaikan dengan kebutuhan UMKM, Free konsultasi sambil curcol sana-sini",
  },
  {
    logo: colabLogo,
    title: "Wadah Kolaborasi",
    explanation:
      "Era Studio sebagai promotor kolaborasi anak muda untuk menyalurkan kreativitasnya",
  },
]
export const Reasons = () => {
  return (
    <Container addBg={true} bg={bgImg}>
      <CenterContent>
        <h4>Mengapa harus kolaborasi dengan Era Studio?</h4>
        <Cards datas={dataCard} />
      </CenterContent>
    </Container>
  )
}
