import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <section id="Home" className="">
      <Home />
    </section>
    <section id="About" className="">
      <About />
    </section>
    <section id="Projects" className="">
      <Projects />
    </section>
    <section id="Contact" className="">
      <Contact />
    </section>
  </StrictMode>,
)
