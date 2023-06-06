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
        {dataServices.map((data, index) => (
          <Route
            key={index}
            path={`/layanan${data.route}`}
            element={<Layanan data={data} />}
          />
        ))}
        <Route path="/projects" element={<Portofolio />} />
      </Routes>
    </>
  )
}

export default App
