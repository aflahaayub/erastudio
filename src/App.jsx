// import { useState } from "react"
import { Routes, Route } from "react-router-dom"

//Pages
import { Home } from "./pages/Home"

//Style
import { GlobalStyle } from "./style/globalStyle.js"
import { Layanan } from "./pages/Layanan"

//data
import { dataServices } from "./assets/dataServices"
import { Portofolio } from "./pages/Portofolio"

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route
          path="/socmed-management"
          element={<Layanan data={dataServices[0]} />}
        />
        <Route
          path="/logo-design"
          element={<Layanan data={dataServices[1]} />}
        />
        <Route
          path="/product-photography"
          element={<Layanan data={dataServices[2]} />}
        />
        <Route
          path="/campaign-management"
          element={<Layanan data={dataServices[3]} />}
        />
        <Route
          path="/content-design"
          element={<Layanan data={dataServices[4]} />}
        />
        <Route path="/projects" element={<Portofolio />} />
      </Routes>
    </>
  )
}

export default App
