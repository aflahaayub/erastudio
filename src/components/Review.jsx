import React from "react"
import styled from "styled-components"
// import { Card } from "../style/globalStyle"
const Card = styled.div`
  max-width: 20rem;
  min-height: 10rem;
  padding: 2rem 1rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-wrap: break-word;

  p {
    line-height: 1.3rem;
  }

  .title {
    padding-bottom: 1rem;
    font-size: 0.85rem;
    font-weight: bold;
  }

  .name {
    padding-top: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: 62rem) {
    max-width: 35rem;
    /* flex-direction: column; */
  }
`

const WrapReview = styled.section`
  padding: 1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  h4 {
    line-height: 2rem;
    min-width: 10rem;
    color: #484782;
    font-size: 1.7rem;
    align-items: 10px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 65rem) {
    flex-direction: column;
  }
`

const WrapCard = styled.div`
  display: flex;
  overflow: hidden;
  /* overflow-y: hidden; */
  @media (max-width: 52rem) {
    flex-direction: column;
  }
`

const dataReview = [
  {
    title: "Tridara Cake & Bakery",
    review:
      "Brainstorming yang baik dengan eksekusi hasil pemikiran bersama denga nilai yang baik sekali",
    name: "Abbas",
  },
  {
    title: "Just Hebite",
    review:
      "Sangan terkesan karena IG kami bisa manarik untuk dilihat dan semoga semakin banyak yg mengetahui tentang keunggulan dan manfaat produk kami.",
    name: "Arin",
  },
  {
    title: "Ismarch Cookies & Dessert",
    review: "Alhamdulillah sangat senang dan terbantu dengan adanya freemium",
    name: "Sharly",
  },
]

export const Review = () => {
  return (
    <WrapReview>
      <h4>Apa kata sobat UMKM setelah berkolaborasi dengan Era Studio ?</h4>
      <WrapCard>
        {dataReview.map((data, index) => (
          <Card key={index}>
            <p className="title">{data.title}</p>
            <p>{data.review}</p>
            <p className="name">{data.name}</p>
          </Card>
        ))}
      </WrapCard>
    </WrapReview>
  )
}
