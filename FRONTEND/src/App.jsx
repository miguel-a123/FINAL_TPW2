import { Route, Routes } from "react-router-dom"
import { HomePage } from "./components/pages/homePage"
import { Navbar } from "./components/organisms/navbar"
import { LoginPage } from "./components/pages/loginPage"
import { RegisterClientePage } from "./components/pages/registerClientePage"
import { MotosCatalogPage } from "./components/pages/MotosCatalogPage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/cliente" element={<RegisterClientePage />} />
        <Route path="/motorcycles" element={<MotosCatalogPage />} />
      </Routes>
    </>
  )
}

export default App
