import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import DonorCard from './pages/GoodKarma'

function MainPage() {
  return (
    <>
      <section id="Home" className="">
        <Home/>
      </section>
      <section id="About" className="">
        <About/>
      </section>
      <section id="Projects" className="">
        <Projects/>
      </section>
      <section id="Courses" className="">
        <Courses/>
      </section>
      <section id="Contact" className="">
        <Contact/>
      </section>
    </>
  )
}

const sampleDonor = {
  id: "0042",
  name: "Margaret Alvarez",
  address: "123 Jeter St, Santa Cruz, CA 95060",
  phone: "(831) 555-0148",
  donations: [
    { id: "d1", date: "2026-03-14", amount: 200, note: "2 Bikes" },
    { id: "d2", date: "2025-11-02", amount: 800, note: "5 Bikes" },
  ],
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Good-Karma" element={<DonorCard donor={sampleDonor} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
