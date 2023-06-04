import React from "react"
import styled from "styled-components"

//styles
import { Container, CenterContent } from "../style/globalStyle"
import { Carousels } from "../UI/Carousel"

//data
import { dataServices } from "../assets/dataServices"

export const Service = () => {
  return (
    <div id="layanan">
      <CenterContent>
        <h4>Produk dan Layanan dari Era Studio</h4>
        <Carousels datas={dataServices} />
      </CenterContent>
    </div>
  )
}
