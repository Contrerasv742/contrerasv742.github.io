import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <About />
    <Projects />
    <Contact />
  </StrictMode>,
)
