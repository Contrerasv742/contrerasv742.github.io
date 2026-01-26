import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
// import Courses from './pages/Courses'
import Contact from './pages/Contact'

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
    <section id="Courses" className="">
      <Courses />
    </section>
    <section id="Contact" className="">
      <Contact />
    </section>
  </StrictMode>,
)
